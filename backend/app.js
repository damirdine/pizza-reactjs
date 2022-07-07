const express = require('express')
const cors = require('cors')
const bp = require("body-parser")
// Database
const mongo = require("mongodb")
const monk = require("monk")
const db = monk("localhost:27017/pizzas")
// user passport
const passport = require("passport")
const session = require("express-session");
// hasher
const bcrypt = require("bcrypt");

const app = express()
const port = 8080

const initializePassport = require('./passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

app.use(bp.json())  
app.use(bp.urlencoded({extended:true})) 
app.use(cors())
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
)
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req,res,next){
  req.db = db;
  next();
});

const pizzasRouter = require('./routes/pizzas');
const usersRouter = require('./routes/users');

app.use('/pizzas', pizzasRouter);
app.use('/users', usersRouter);

app.listen(process.env.PORT || port);