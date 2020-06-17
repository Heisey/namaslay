<<<<<<< HEAD
import React, {useState} from 'react';
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement, PaymentRequestButtonElement } from '@stripe/react-stripe-js';
=======
import React from 'react';
import { CardElement, useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement, PaymentRequestButtonElement } from '@stripe/react-stripe-js';
>>>>>>> 50bf8817ab5c2085e2cd824c132386558795e92c
import axios from 'axios'
import './PayemntPanel.scss'
import qs from 'qs'
import SnakeBorderButton from '../../Buttons/SnakeBorderButton/SnakeBorderButton'
import PersonLogo from '../../logos/PersonLogo/PersonLoop'
import LoadingAnimation from '../../LoadingAnimation/LoadingAnimation'
const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

const ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '18px',
      color: '#ef6101',
      letterSpacing: '0.025em',
      '::placeholder': {
        color: '#fdac07',
      },
    },
    invalid: {
      color: '#b50e0e',
    },
  },
};

export default function PaymentPanel(props) {

    const {passCountHandler, userId, selectedClass } = props

    const [showLoading, showLoadingHandler] = useState(false)
    const [showForm, showFormHandler] = useState(true)
    const [showError, showErrorHandler] = useState(false)
    
  const stripe = useStripe();
  const elements = useElements();

const handleSubmit = async (event) => {
  showLoadingHandler(true)
    // event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardNumberElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement
    });
    if (error) {
      showFormHandler(false)
      showLoadingHandler(false)
      showErrorHandler(true)
      console.log('[error]', error);
    } else {
      passCountHandler(1)
      console.log('hiding form')
      showFormHandler(false)
      // ?? need to make request to db to add a pass to the user
      //  hte user id is userId props
    }
    if (paymentMethod.created) {
      const requestBody = { type: 'single', selectedClass }
      await axios.post(`/classes/${selectedClass}/book`, qs.stringify(requestBody), config)
        .then((res) => {
          showLoadingHandler(false)
          console.log(res.data);
        })
        .catch((e) => {
          showLoadingHandler(false)
          showErrorHandler(true)
          showFormHandler(false)
        })
    }


  };


  return (
    <div className="PaymentPanel">

      {showForm && (
        <form 
        onSubmit={handleSubmit}
        className="PaymentPanel__form"
      >
            <div className="PaymentPanel__form--numberTitle">
              Enter Card Number:
            </div>
            <div className="PaymentPanel__form--number">
              <CardNumberElement options={ELEMENT_OPTIONS} />
            </div>

            <div className="PaymentPanel__form--expiryTitle">
              Enter Expiry Date:
            </div>
            <div className="PaymentPanel__form--expiry">
              <CardExpiryElement options={ELEMENT_OPTIONS} />
            </div>

            <div className="PaymentPanel__form--cvcTitle">
              Enter CVC Number:
            </div>
            <div className="PaymentPanel__form--cvc">
              <CardCvcElement options={ELEMENT_OPTIONS} />  
            </div>
            
            <div className='PaymentPanel__form--button'>
              <SnakeBorderButton
                text='PURCHASE'
                clickHandler={handleSubmit}
              />
            </div>
        
      </form>
      )}
      

      {showLoading && (
        <div className='PaymentPanel__loading'>
          <LoadingAnimation />
        </div>
      )}

      {(!showLoading && !showForm && !showError) && (
        <div className='PaymentPanel__success'>
          <span>SUCCESS</span>
        </div>
      )}

      {(!showLoading && !showForm && showError) && (
        <div className='PaymentPanel__success'>
          <span>FAILED</span>
        </div>
      )}

      <div className="PaymentPanel__sword--one">
          <PersonLogo
          />
        </div>

        <div className="PaymentPanel__sword--two">
          <PersonLogo
          />
        </div>
    </div>
  )
}


