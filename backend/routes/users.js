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

  let userEmail = req.body.useremail;
  let userFullName = req.body.userfullname;
  let userPassword = req.body.userPassword


  //Set the collection
  var collection = db.get('users');
      collection.insert(
        {
          "fullname":userFullName,
          "email": userEmail,
          "password":userPassword,
          "location":userLocation,
          "gender":userGender
        }, 
        function(err){
          if(err){
            res.send("Problem for adding user to database.")
          }
          res.redirect("userlist");
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