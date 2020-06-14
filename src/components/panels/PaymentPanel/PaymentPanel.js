import React from 'react';
import { CardElement,   useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios'
import qs from 'qs'
const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

export default function PaymentPanel(props) {

    const {passCountHandler, userId } = props
    
  const stripe = useStripe();
  const elements = useElements();

const handleSubmit = async (event) => {
    
    event.preventDefault();

    if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      passCountHandler(1)
      console.log(paymentMethod);
      // ?? need to make request to db to add a pass to the user
      //  hte user id is userId props
    }
    if (paymentMethod.created) {
      const requestBody = { type: 'single' }
      await axios.post(`/students/${userId}/passes`, qs.stringify(requestBody), config)
        .then((res) => {
          console.log(res.data);
        })
        .catch((e) => {
          console.log(e);
        })
    }


  };


  return (
    <div className="PaymentPanel">
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe} >Pay</button>
      </form>

    </div>
  )
}
