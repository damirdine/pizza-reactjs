const express = require('express');
const router = express.Router();


const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

const stripe = require('stripe')(stripeSecretKey)

router.post('/', function (req, res) {
    const db = req.db
    const {cart, total} = req.body
    console.log(cart,total)
    res.send(cart)
});

router.post('/checkout', function (req, res) {
    const db = req.db
    const {cart, total} = req.body
    console.log(cart,total)
    stripe.charges.create({
        amount: total,
        source: "price_1LKimABoXSShTQR5w5rnIa1t",
        currency: 'eur'
      }).then(function() {
        console.log('Charge Successful')
        res.json({ message: 'Successfully purchased items' })
      }).catch(function() {
        console.log('Charge Fail')
        res.status(500).json({ message: 'Fail purchase items' }).end()
      })
});

module.exports = router;