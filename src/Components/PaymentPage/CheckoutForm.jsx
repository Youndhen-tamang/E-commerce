// src/CheckoutForm.js
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './CheckoutForm.css';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, token } = await stripe.createToken(cardElement);

    if (error) {
      setError(error.message);
    } else {
      setError(null);
      // Send the token to your server for processing the payment
      const response = await fetch('http://localhost:3001/process-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: token.id }),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        setError('Payment failed');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <CardElement className="card-element" />
      <button type="submit" disabled={!stripe} className="submit-button">
        Pay
      </button>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">Payment successful!</div>}
    </form>
  );
};

export default CheckoutForm;
