const express = require('express');
const router = express.Router();
const dotenv = require("dotenv")
dotenv.load()

router.post('/', function (req, res) {
    const db = req.db
    {cart} req.body
    res.send(req.body)
});

module.exports = router;