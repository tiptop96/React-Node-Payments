const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? '<LIVE_KEY>'
    : 'sk_test_kfmw4zWNKMPKGQltG2uxjYLt';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;

