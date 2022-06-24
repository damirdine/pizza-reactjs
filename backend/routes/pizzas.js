const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    const db = req.db;
    const collection = db.get('pizzas');
    collection.find({}, {}, function (err, docs) {
        res.json(docs);
    });
  });


router.get("/:id", function(req, res){
  const db = req.db;

  const pizzaToFind = req.params.id;

  const collection = db.get("pizzas");
  collection.findOne({"_id": pizzaToFind},{},function(e,docs){
    res.json(docs);
  });
});

module.exports = router;