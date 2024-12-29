import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import FeaturedItemImg from '../../../assets/home/featured.jpg'

const FeturedItem = () => {
    return (
        <div className='my-20 '>

            <div className="hero bg-fixed bg-featured-bgImg my-10 ">
                <div className="hero-overlay  bg-opacity-60 pt-10 my-10 text-white">
                    <SectionTitle subTitle="Check it Out" title="featured Item"></SectionTitle>
                </div>
                <div className="hero-content text-neutral-content">
                    <div className="flex-1 pt-44 pb-20">
                        <img src={FeaturedItemImg} alt="" />
                    </div>
                    <div className="flex-1 md:ml-12 pt-20">
                        <h1 className="text-2xl  font-bold">March 20, 2023</h1>
                        <h1 className="text-2xl  font-bold">WHERE CAN I GET SOME?</h1>
                        <p className="mb-5">
                            Perfect for intimate dinners, corporate events, or special celebrations, BISTRO BOSS is more than a meal – it’s a memory waiting to be made.
                        </p>
                        <button className="btn btn-outline border-0 border-b-4 text-white uppercase  hover:bg-white hover:text-black hover:border-b-white">read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeturedItem;