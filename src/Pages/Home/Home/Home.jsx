import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import DistroBoss from '../DistroBoss/DistroBoss';
import FromOurMenu from '../FromOurMenu/FromOurMenu';
import CallUs from '../CallUs/CallUs';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import Testimonials from '../Testimonials/Testimonials';
import FeaturedItem from '../FeaturedItem/FeaturedItem';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="md:w-9/12 mx-auto my-20 px-5 md:px-0">
                <Category></Category>
                <DistroBoss></DistroBoss>
                <FromOurMenu></FromOurMenu>
                <CallUs></CallUs>
                <ChefRecommends></ChefRecommends>
            </div>
            <FeaturedItem />
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;