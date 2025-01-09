import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';

const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [carts, isPending] = useCart()
    const { user, loading } = useAuth()
    const [clientSecret, setClientSecret] = useState('')
    const [transactionId, setTransactionId] = useState('')
    const axiosSecure = useAxiosSecure()

    if (isPending || loading) return 'Loading...'
    const totalPrice = carts.reduce((total, cart) => total + cart.price, 0)

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])


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

        // confirm payment 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error', confirmError);

        }
        else {
            console.log('payment intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id:', paymentIntent.id);
                setTransactionId(paymentIntent.id)


                const paymentInfo = {
                    email: user.email,
                    name: user.displayName,
                    cartIds: carts.map(cart => cart._id),
                    itemNames: carts.map(cart => cart.name),
                    itemIds: carts.map(cart => cart.id),
                    price: totalPrice,
                    PaymentDate: new Date(),
                    status: 'pending',
                }
                const { data } = await axiosSecure.post('/payments', paymentInfo)
                // console.log(data.paymentResult, data.cartRemoveResult);
                if (data?.paymentResult?.insertedId) {
                    Swal.fire({
                        title: "Payment Successfully.",
                        icon: "success",
                        draggable: true
                    });
                }
            }
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
                <button className='btn mt-5 w-48 btn-neutral' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                {
                    error && <p className='text-red-500'>{error}</p>
                }
                {
                    transactionId && <p className='text-green-500'>Your TransactionId: {transactionId}</p>
                }
            </form>
        </div>
    );
};

export default CheckOut;