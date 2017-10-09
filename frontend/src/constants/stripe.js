const STRIPE_PUBLISHABLE = process.env.NODEENV === 'production' 
? '<MY_LIVE_KEY>' 
: 'pk_test_QBl40xKwK5DlSN96ZFjxAeVV';
export default STRIPE_PUBLISHABLE;