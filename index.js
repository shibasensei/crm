const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const redis = require('redis');
const redisStore = require('connect-redis')(session);
const client  = redis.createClient();

const router = express.Router();
const app = express();

app.use(session({
  secret: 'ssshhhhh',
  store: new redisStore({ host: 'localhost', port: 6379, client: client,ttl : 260}),
  saveUninitialized: false,
  resave: false
}));

const bcrypt = require('bcrypt-nodejs');

const path = require('path');
const cors = require('cors');
const knex = require('knex');

app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


const register = require('./controllers/register');
const clients = require('./controllers/client');
const login = require('./controllers/login');

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

router.get('/',function(req,res){

    res.render('index',{
        
    });
});
router.get('/welcome',function(req,res){

  res.render('welcome',{
     email: "test@email.com"
  });
});
router.get('/profile',function(req,res){

  res.render('profile',{
    email: "test@email.com"
  });
});
router.get('/data',function(req,res){

  res.render('data',{
    email: "test@email.com",
    data: ["1","2","3","4"]
  });
});
router.get('/add',function(req,res){

  res.render('add',{
    email: "test@email.com"
  });
});
router.post('/register',register.handleRegister(db,bcrypt));
router.post('/login',login.handleLogin(db,bcrypt));

router.post('/client',clients.addClient(db));
router.post('/deleteClient',clients.deleteClient(db));
router.post('/getClients',clients.getClients(db));

app.use('/',router);

app.listen(3003,()=>{console.log('server runs port 3003')});