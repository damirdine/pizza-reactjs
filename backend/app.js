const express = require('express');
const cors = require('cors')
const bp = require("body-parser")
// Database
const mongo = require("mongodb")
const monk = require("monk")
const db = monk("localhost:27017/pizzas");

const app = express()
const port = 8080

app.use(cors())
app.use(bp.json())
app.use(bp.urlencoded({extended:true}))

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

app.use('/pizzas', pizzasRouter);
app.use('/users', usersRouter);

app.listen(process.env.PORT || port);