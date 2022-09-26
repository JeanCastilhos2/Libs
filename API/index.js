const cors = require('cors');
const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const routes = require('./Routes/routes');


//CONFIGURAÇÃO ROUTESS

app.use(routes);

//CORS

app.use(cors());

//SERVIDOR

app.listen('4567');
console.log('http://localhost:4567/livros');


//CONFIGURAÇÃO DO BODY PARSER 

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CONFIGURAÇÃO DA SESSION DO DB

app.use(session({
    secret: 'chavesegredo',
    resave: false,
    saveUninitialized : true
}))



