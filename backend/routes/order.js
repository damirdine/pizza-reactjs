const express = require('express');
const router = express.Router();


const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY

const stripe = require('stripe')(stripeSecretKey)

router.post('/checkout', async function (req, res) {
    const db = req.db
    const {cart} = req.body
    try {
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          mode: "payment",
          line_items: cart.map(item => {
            return {
              price_data: {
                currency: "eur",
                product_data: {
                  name: item.name,
                },
                unit_amount: item.priceInCents,
              },
              quantity: item.quantity,
            }
          }),
          // LIINK HAVE TO CHANGE FOR FRONT END APP
          success_url: `${process.env.DOMAIN}/success`,
          cancel_url: `${process.env.DOMAIN}/cancel`,
        })
        res.json({ url: session.url })
      } catch (e) {
        res.status(500).json({ error: e.message })
      }
});

router.get('/checkout/success',(req,res) => {
    res.send("checkout is success")
})
router.get('/checkout/cancel',(req,res) => {
    res.send("checkout is cancel")
})

module.exports = router;