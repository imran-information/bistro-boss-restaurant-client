import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { FaCartArrowDown } from "react-icons/fa";

const NavBar = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const navigationBar = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/menu'>Our Menu</NavLink></li>
        <li><NavLink to='/order/salads'>Order Food</NavLink></li>
        <li><NavLink to='/secret'>Secret</NavLink></li>
        <li><NavLink to='/'>
            <button className="flex items-center gap-2">
            <FaCartArrowDown className='text-white w-5' />
                <div className="badge">+0</div>
            </button>
        </NavLink></li>
    </>
    const handleSignOutUser = () => {
        signOutUser()
            .then(() => {
                Swal.fire({
                    title: "Sign Out successfully",
                    icon: "success",
                    draggable: true
                });
            })
    }

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
                    {
                        user ? <>
                            <button onClick={handleSignOutUser} className="btn btn-neutral btn-sm mr-3">Sign Out</button>
                            <div className="avatar w-10 cursor-pointer">
                                <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                        </> : <li className='list-none underline underline-offset-4 decoration-pink-500'><NavLink to='/signIn'>Sign In</NavLink></li>
                    }
                </div>
            </div>
        </>
    );
};

export default NavBar;