import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOut from './CheckOut';


const stripePromise = loadStripe(import.meta.env.VITE_SRTIPE_PUBLISH_KEY)
const Payment = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <SectionTitle title={"Payment"} subTitle={"Pay.!"}></SectionTitle>

            <Elements stripe={stripePromise}>
                <CheckOut></CheckOut>
            </Elements>

        </div>
    );
};

export default Payment;