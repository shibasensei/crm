const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const path = require('path');
const cors = require('cors');
const knex = require('knex');


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


const app = express();

app.use(bodyParser.json());
app.use(cors());

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

app.use(express.static(path.join(__dirname,'public')))

app.get('/',function(req,res){
    res.render('index',{
        
    });
});
app.get('/welcome',function(req,res){
  res.render('welcome',{
      
  });
});
app.get('/profile',function(req,res){
  res.render('profile',{
      
  });
});
app.get('/data',function(req,res){
  res.render('data',{
      
  });
});

app.post('/register',register.handleRegister(db,bcrypt));
app.post('/login',login.handleLogin(db,bcrypt));

app.post('/client',clients.addClient(db));
app.post('/deleteClient',clients.deleteClient(db));
app.post('/getClients',clients.getClients(db));

app.listen(3003,()=>{console.log('server runs port 3003')});