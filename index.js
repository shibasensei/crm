const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3003;

const router = express.Router();
const app = express();

const bcrypt = require('bcrypt-nodejs');

const path = require('path');
const cors = require('cors');
const knex = require('knex');

app.use(session({secret: 'secret',saveUninitialized: true,resave: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


const register = require('./controllers/register');
const clients = require('./controllers/client');
const login = require('./controllers/login');

const user = require('./global/vars');

const db = knex({
    client: 'pg',
    connection: {
    host : '127.0.0.1',
    user : 'viacheslav',
    password : '',
    database : 'crmsystem'
  }
});

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');
app.use(express.static(path.join(__dirname,'public')))
user.email = "vv@gmail.com";
router.get('/',function(req,res){
  if(user.email){
    res.redirect("/welcome");
  }else{
    user.email = "";
    res.render('index',{});
  }
});

router.get('/logoff',(req,res)=>{
  user.email = "";
  res.redirect("/");
});

router.get('/welcome',function(req,res){
  if(user.email){
    res.render('welcome',{
      email: user.email
   });
  }else{
    res.redirect("/");
  }
  
});

router.get('/profile',function(req,res){
  if(user.email){
    res.render('profile',{
      email: user.email
    });
  }else{
    res.redirect("/");
  }
  
});

router.get('/data',function(req,res){
  if(user.email){
    res.render('data',{
      email: user.email,
      data: user.clients
    });
  }else{
    res.redirect('/');
  }
});

router.get('/add',function(req,res){
  if(user.email){
    res.render('add',{
      email: user.email
    });
  }else{
    res.redirect('/');
  }
});

router.get('/analytics',function(req,res){
  if(user.email){
    res.render('analytics',{
      email: user.email
    });
  }else{
    res.redirect('/');
  }
});

router.post('/register',register.handleRegister(db,bcrypt,user));
router.post('/login',login.handleLogin(db,bcrypt,user));

router.post('/client',clients.addClient(db,user));
router.post('/deleteClient',clients.deleteClient(db,user));

router.get('/getClients',clients.getClients(db,user));

app.use('/',router);

app.listen(3003,()=>{console.log('server runs port 3003')});