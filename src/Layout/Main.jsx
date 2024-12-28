import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='font-montserrat'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;