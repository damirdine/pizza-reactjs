const express = require('express');
const cors = require('cors')
const bp = require("body-parser")
// Database
const mongo = require("mongodb")
const monk = require("monk")
const db = monk("localhost:27017/pizzas");

const app = express()
const port = 8080

var corsMiddleware = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'localhost'); //replace localhost with actual host
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');

  next();
}


var collection = db.get('users');
collection.find({},{},function(e,docs){
  docs;
});

app.use(function(req,res,next){
  req.db = db;
  next();
});

const pizzasRouter = require('./routes/pizzas');
const usersRouter = require('./routes/users');
const { urlencoded } = require('express');


app.use(cors())
app.use(corsMiddleware);
app.use(bp.json())
app.use(bp.urlencoded({extended:true}))


app.use('/pizzas', pizzasRouter);
app.use('/users', usersRouter);

app.listen(process.env.PORT || port);