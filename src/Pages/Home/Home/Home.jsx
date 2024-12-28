import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import DistroBoss from '../DistroBoss/DistroBoss';
import FromOurMenu from '../FromOurMenu/FromOurMenu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="w-9/12 mx-auto my-20">
                <Category></Category>
                <DistroBoss></DistroBoss>
                <FromOurMenu></FromOurMenu>
            </div>
        </div>
    );
};

export default Home;