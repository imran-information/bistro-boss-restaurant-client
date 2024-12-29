import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import DistroBoss from '../DistroBoss/DistroBoss';
import FromOurMenu from '../FromOurMenu/FromOurMenu';
import FeturedItem from '../FeturedItem/FeturedItem';
import CallUs from '../CallUs/CallUs';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import Testimonials from '../Testimonials/Testimonials';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="w-9/12 mx-auto my-20">
                <Category></Category>
                <DistroBoss></DistroBoss>
                <FromOurMenu></FromOurMenu>
                <CallUs></CallUs>
                <ChefRecommends></ChefRecommends>
            </div>
            <FeturedItem></FeturedItem>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;