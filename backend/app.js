const express = require('express');

// Database
const mongo = require("mongodb");
const monk = require("monk");
const db = monk("localhost:27017/pizzas");
var collection = db.get('users');
collection.find({},{},function(e,docs){
  docs;
});

const pizzasRouter = require('./routes/pizzas');
const usersRouter = require('./routes/users')
const cors = require('cors')

const app = express();
const port = 8080
app.use(cors());

app.use(function(req,res,next){
  req.db = db;
  next();
  });

app.use('/pizzas', pizzasRouter);
app.use('/users', usersRouter);

app.listen(process.env.PORT || port);