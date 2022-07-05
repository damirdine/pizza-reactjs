var express = require('express');
var router = express.Router();

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

  collection.findOne({"email": userEmail},{},function(e,docs){
    res.json(docs)
    if(docs!==null){
      console.log("is exist")
    }
  })

  if(userPassword!==userConfirmPassword){
    return res.send("Password not Match")
  }
  //Set the collection
  collection.insert(
    {
      "fullname":userFullName,
      "email": userEmail,
      "password":userPassword,
      "phone_number":userPhoneNumber,
      "adress":{
        "adress":userAdress,
        "complement": userComplement,
        "postcode": userPostCode,
        "city": userCity
      }
    }, 
    function(err){
      if(err){
        res.send("Problem for adding user to database.")
      }
      res.redirect("localhost:3000");
    }
  )
});

router.post('/login', function(req,res){
  var db =req.db
  var userToFind = req.body.email
  var userPassword = req.body.password

  var collection = db.get('users');
  collection.findOne({"email": userToFind},{},function(e,docs){
    res.json(docs);
  })
});



module.exports = router;