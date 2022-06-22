const express = require('express');

// Database
const mongo = require("mongodb");
const monk = require("monk");
const db = monk("localhost:27017/pizzas");

// const usersRouter = require('./routes/users');
const pizzasRouter = require('./routes/pizzas');

const app = express();

app.use(function(req,res,next){
  req.db = db;
  next();
  });

app.use('/pizzas', pizzasRouter);
// app.use('/users', usersRouter);

app.listen(process.env.PORT || 8080);