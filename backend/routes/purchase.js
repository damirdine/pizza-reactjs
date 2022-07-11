const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    const db = req.db;
    const collection = db.get('pizzas');
    collection.find({}, {}, function (err, docs) {
        res.json(docs);
    });
});

module.exports = router;