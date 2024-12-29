import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
    const navigationBar = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/menu'>Our Menu</NavLink></li>
    </>

    return (
        <>
            <div className="navbar px-10 fixed z-10 bg-black bg-opacity-50  text-white uppercase">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navigationBar}
                        </ul>
                    </div>
                    <Link to='/' className="font-silkscreen ">
                        <h3 className=' text-3xl -tracking-[6px] font-semibold leading-none'>BISTRO BOSS</h3>
                        <p className='pl-[2px] text-xl tracking-[6px] leading-none'>RESTAURANT</p>

                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navigationBar}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default NavBar;