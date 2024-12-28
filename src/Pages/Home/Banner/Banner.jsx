import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Banner.css";
import bannerImg1 from '../../../assets/home/01.jpg'
import bannerImg2 from '../../../assets/home/02.jpg'
import bannerImg3 from '../../../assets/home/03.png'
import bannerImg4 from '../../../assets/home/04.jpg'
import bannerImg5 from '../../../assets/home/05.png'
import bannerImg6 from '../../../assets/home/06.png'

const Banner = () => {
    return (
        <Carousel infiniteLoop={true}  autoPlay={true} >
            <div className=''>
                <img className='' src={bannerImg1} />

            </div>
            <div className=''>
                <img className='' src={bannerImg2} />

            </div>
            <div className=''>
                <img className='' src={bannerImg3} />

            </div>
            <div className=''>
                <img className='' src={bannerImg4} />

            </div>
            <div className=''>
                <img className='' src={bannerImg5} />

            </div>
            <div className=''>
                <img className='' src={bannerImg6} />

            </div>
        </Carousel >
    );
};

export default Banner;