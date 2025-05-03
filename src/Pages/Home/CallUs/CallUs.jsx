import React from 'react';

const CallUs = () => {
    return (
        <div className='bg-gradient-to-r from-gray-900 to-black py-16 md:py-24 text-center my-12 md:my-20 text-white rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-500'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight'>
                    <span className='block text-subTitle-color text-sm sm:text-base md:text-lg font-medium mb-2 sm:mb-3'>
                        Need Assistance?
                    </span>
                    Call Us: <span className='text-subTitle-color'>+88 019234567891</span>
                </h1>
                <p className='mt-4 sm:mt-6 text-gray-300 text-sm sm:text-base max-w-2xl mx-auto'>
                    Available 24/7 for reservations, inquiries, and special requests
                </p>
            </div>
        </div>
    );
};

export default CallUs;