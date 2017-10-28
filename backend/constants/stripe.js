const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? '<LIVE_KEY>'
    : '<TEST_KEY>';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;

