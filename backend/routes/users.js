var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');



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
    console.log(docs)
    if (docs) {
      return res.json({message : `User exist with this email : ${userEmail}`})
    }
    return res.json({"message" : "User can register"})
})
  // collection.insert(
  //   {
  //     "fullname":userFullName,
  //     "email": userEmail,
  //     "password":userPassword,
  //     "phone_number":userPhoneNumber,
  //     "adress":{
  //       "adress":userAdress,
  //       "complement": userComplement,
  //       "postcode": userPostCode,
  //       "city": userCity
  //     }
  //   }, 
  //   function(err,docs){
  //     if(err){
  //       res.send("Problem for adding user to database.")
  //     }
  //     if(userPassword!==userConfirmPassword){
  //       return res.json("Password not Match")
  //     }
  //   }
  // )
});

router.post('/login', function(req,res){
  var db = req.db;
  var collection = db.get('users');
  console.log(req.body)
  collection.findOne({email : req.body.email}, {},function(err,docs){
    console.log(docs)
    if (!docs) {
      return res.json({message : "il existe pas !!"})
    }
    if(docs.password===req.body.email){
      return res.json({"message" : "User logged"})
    }else{
      return res.json({"message" : "Password Error"})
    }
})
});

router.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})


module.exports = router;