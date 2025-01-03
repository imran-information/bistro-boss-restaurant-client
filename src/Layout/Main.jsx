import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    const location = useLocation();
    const noHeaderFooterSignUp = location.pathname.includes('signUp')
    const noHeaderFooterSignIn = location.pathname.includes('signIn')

    return (
        <div className='font-montserrat'>
            {noHeaderFooterSignIn || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooterSignIn || <Footer></Footer>}
        </div>
    );
};

export default Main;