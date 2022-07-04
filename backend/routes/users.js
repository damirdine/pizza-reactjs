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
  //post value from the form 
  console.log(req.body)

  let userFullName = req.body.fullname;
  let userEmail = req.body.email;
  let userPassword = req.body.password;
  let userConfirmPassword = req.body.confirmPassword;
  let userPhoneNumber = req.body.phoneNumber;
  let userAdress = req.body.adress;
  let userComplement = req.body.complement;
  let userPostCode = req.body.postCode;
  let userCity = req.body.city;

  if(userPassword!==userConfirmPassword){
    return res.send("Password not Match")
  }
  //Set the collection
  var collection = db.get('users');
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

router.get('/:id', function(req,res){
  var db =req.db;
  var userToFind = req.params.id;
  var collection = db.get('userlist');
  collection.findOne({"_id": userToFind},{},function(e,docs){
    res.json(docs);
  })
});



module.exports = router;