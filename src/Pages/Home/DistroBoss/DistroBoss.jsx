import React from 'react';

const DistroBoss = () => {
    return (
        <div className="hero min-h-[400px] rounded-lg shadow-lg overflow-hidden sm:h-[500px] md:h-[572px] bg-distro-boss bg-cover bg-center bg-fixed my-10 md:my-20">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center p-4 sm:p-6 ">
                <div className="bg-white bg-opacity-85 text-black py-10 sm:py-14 md:py-20 rounded-lg shadow-lg px-6 sm:px-20 md:px-10 lg:px-20 w-full max-w-screen-lg mx-4">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="mb-3 text-2xl sm:text-3xl md:text-4xl font-medium font-silkscreen uppercase">
                            Bistro Boss
                        </h1>
                        <p className="mb-5 text-sm sm:text-base leading-5 sm:leading-6">
                            Perfect for intimate dinners, corporate events, or special celebrations, BISTRO BOSS is more than a meal – it's a memory waiting to be made. Indulge in our signature dishes like Wood-Fired Margherita Pizza and savor an exquisite selection of fine wines and crafted cocktails.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DistroBoss;