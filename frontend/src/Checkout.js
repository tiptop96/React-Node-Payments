import React from 'react';
import axios from 'axios'; //Send HTTP requests with promises (.then().error())
import StripeCheckout from 'react-stripe-checkout'; //Stripe thingy to generate JSON for server
import { Button } from 'react-bootstrap'; //Required for button

import STRIPE_PUBLISHABLE from './constants/stripe'; //Stripe pk
import PAYMENT_SERVER_URL from './constants/server'; //Server url to post request to

const CURRENCY = 'EUR';

const fromEuroToCent = amount => amount * 100;

const successPayment = data => {
    alert('Payment Sucessful');
    console.log(data);
};

const errorPyament = data => {
    alert('Payment Error');
    console.log(data);
};

const onToken = (amount, description) => token =>
    axios.post(PAYMENT_SERVER_URL,
    {
        description,
        receipt_email: token.email, //FUNKAR BARA MED LIVE NYCKLAR!
        source: token.id,
        currency: CURRENCY,
        amount: fromEuroToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment/*function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
    }*/);

const Checkout = ({name, description, amount, panelLabel}) =>
    <StripeCheckout
        panelLabel={panelLabel}
        name={name}
        description={description}
        amount={fromEuroToCent(amount)}
        token={onToken(amount, description)}
        currency={CURRENCY}
        stripeKey={STRIPE_PUBLISHABLE}
    >
    <Button  bsSize="large" className="App-btn">Book now!</Button>
    </StripeCheckout>

export default Checkout;