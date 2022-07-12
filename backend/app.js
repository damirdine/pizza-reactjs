const express = require('express')
const cors = require('cors')
const bp = require("body-parser")
// Database
const mongo = require("mongodb")
const monk = require("monk")
const db = monk("localhost:27017/pizzas")
// user passport
const session = require("express-session");
// hasher
const bcrypt = require("bcrypt");

const app = express()
const port = 8080


app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true,
}))

app.use(bp.urlencoded({extended:true})) 
app.use(bp.json())  

app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: false,
    cookie:{
      maxAge : 60*60*60*12
    }
  })
)
app.use(function(req,res,next){
  req.db = db;
  next();
});

const pizzasRouter = require('./routes/pizzas');
const usersRouter = require('./routes/users');
const OrderRouter = require('./routes/order');

app.use('/pizzas', pizzasRouter);
app.use('/users', usersRouter);
app.use('/purchase', OrderRouter);

app.get("/",(req,res)=>{
  res.send(req.session)
})

app.listen(process.env.PORT || port);