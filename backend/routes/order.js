const express = require('express');
const router = express.Router();


const YOUR_DOMAIN = "http://localhost:8080"

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

const stripe = require('stripe')(stripeSecretKey)

router.post('/', function (req, res) {
    const db = req.db
    const {cart, total} = req.body
    console.log(cart,total)
    res.send(cart)
});

router.post('/checkout', async function (req, res) {
    const db = req.db
    const {cart, total} = req.body
    console.log(cart,total)
    const { product } = req.body;
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: cart,
        mode: "payment",
        success_url: `${YOUR_DOMAIN}/checkout/success`,
        cancel_url: `${YOUR_DOMAIN}/checkout/cancel`,
    });

    res.json({ id: session.id });
});

router.get('/checkout/success',(req,res) => {
    res.send("checkout is success")
})
router.get('/checkout/cancel',(req,res) => {
    res.send("checkout is cancel")
})

module.exports = router;