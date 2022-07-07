var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
const { route } = require('./pizzas');

const saltRounds = 10;



/* GET users listing. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var collection = db.get('users');
  collection.find({},{},function(e,docs){
    res.json({docs})
  });
});

router.post('/adduser',function(req,res){
  var db = req.db;
  var collection = db.get('users');
  //post value from the form 
  let userFullName = req.body.fullname;
  let userEmail = req.body.email;
  let userPassword = req.body.password;
  let userConfirmPassword = req.body.confirmPassword;
  let userPhoneNumber = req.body.phoneNumber;
  let userAdress = req.body.adress;
  let userComplement = req.body.complement;
  let userPostCode = req.body.postCode;
  let userCity = req.body.city;
  //Set the collection
  
  collection.findOne({email : userEmail}, {},function(err,docs){
    if (docs) {
      return res.json({message : `User exist with this email : ${userEmail}`})
    }
    if(!docs && userPassword !== "" && userPassword===userConfirmPassword && userEmail!==""){
      bcrypt.hash(userPassword,saltRounds,(err,hashPassword)=>{ 
        collection.insert(
          {
            "fullname":userFullName,
            "email": userEmail,
            "password":hashPassword,
            "phone_number":userPhoneNumber,
            "adress":{
              "adress":userAdress,
              "complement": userComplement,
              "postcode": userPostCode,
              "city": userCity
            }
          }, 
          function(err,docs){
            if(err){
              return res.json("Problem for adding user to database.")
            }
            return res.json({message : "User Add Correctly"})
          }
      )})
    }else{
      return res.json({message: "email not correct or password not match"})
    }
  })

});

router.get('/isLogin',(req,res)=>{
  if(req.session.loggedUser){
    res.json({
      loggedIn : true,
      user : req.session.loggedUser
    })
  }else{
    res.json({loggedIn: false})
  }
})

router.post('/login',(req,res) => {
  var db = req.db;
  var collection = db.get('users');

  let userEmail = req.body.email
  let userPassword = req.body.password

  collection.findOne({email : userEmail}, {},function(err,docs){
    if(!docs){
      return res.json({message: "no user exist with this email",email:userEmail})
    }
    bcrypt.compare(userPassword, docs.password, function (err, result) {
      if(result){
        req.session.loggedUser = docs
        console.log(req.session)
        return res.json({message: "Success Login",email:userEmail,userFullName: docs.fullname})
      }
      else{
        return res.json({message:"Password incorrect"})
      }
    })
  })
})


router.delete('/logout', (req, res) => {
  req.session.destroy()
  res.redirect('/login')
})


module.exports = router;