import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const handleSubmit = async event => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            setError(error.message)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.message,

            });

        } else {
            console.log('payment Method', paymentMethod);
            setError('')
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn mt-5 w-48 btn-neutral' type="submit" disabled={!stripe}>
                    Pay
                </button>
                {
                    error && <p className='text-red-500'>{error}</p>
                }
            </form>
        </div>
    );
};

export default CheckOut;