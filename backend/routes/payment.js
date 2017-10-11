const stripe = require('../constants/stripe');

const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
    console.log(stripeErr);
  } else {
    res.status(200).send({ success: stripeRes });
    console.log(stripeRes);
  }
}

const paymentApi = app => {
  app.get('/api', (req, res) => {
    res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
  });

  app.post('/api', (req, res) => {
    console.log(req.headers);
    stripe.charges.create(req.body, postStripeCharge(res));
  });

  return app;
};

module.exports = paymentApi;