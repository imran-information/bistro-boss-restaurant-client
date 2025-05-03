import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import FeaturedItemImg from '../../../assets/home/featured.jpg';

const FeaturedItem = () => {
    return (
        <section className="relative my-16 md:my-24 lg:my-32">
            {/* Background with parallax effect */}
            <div className="absolute inset-0 bg-featured-bgImg bg-cover bg-center bg-fixed -z-10"></div>
            <div className="absolute inset-0 bg-black/60 -z-10"></div>

            {/* Content container */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-18  ">
                {/* Section title */}
                <div className="text-center text-white mb-12 md:mb-16 lg:mb-20">
                    <SectionTitle
                        subTitle="Check it Out"
                        title="Featured Item"
                        textColor="text-white"
                    />
                </div>

                {/* Featured content */}
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative overflow-hidden rounded-xl shadow-2xl group">
                            <img
                                src={FeaturedItemImg}
                                alt="Featured dish"
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                        </div>
                    </div>

                    {/* Text content */}
                    <div className="w-full lg:w-1/2 text-white space-y-6">
                        <div className="space-y-2">
                            <p className="text-lg md:text-xl font-medium text-amber-400">
                                March 20, 2023
                            </p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                                WHERE CAN I GET SOME?
                            </h2>
                        </div>

                        <p className="text-base md:text-lg leading-relaxed text-gray-100">
                            Perfect for intimate dinners, corporate events, or special celebrations,
                            BISTRO BOSS is more than a meal – it's a memory waiting to be made.
                            Indulge in our signature dishes crafted with premium ingredients.
                        </p>

                        <button className="mt-4 px-4 py-2 bg-transparent hover:border-white  btn-outline border-0 border-b-2 border-white text-white uppercase font-semibold tracking-wider rounded-lg hover:bg-white hover:text-black transition-all duration-300 hover:shadow-lg">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedItem;