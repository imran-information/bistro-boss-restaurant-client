import React from 'react';
import { FaAmazonPay, FaBook, FaCalendar, FaCartPlus, FaHome, FaResolving, FaShopify } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './Dashboard.css'
import { TiThMenu } from 'react-icons/ti';
import { LiaSmsSolid } from 'react-icons/lia';

const Dashboard = () => {

    return (
        <div className='flex '>
            <div className="w-72 bg-[#D1A054] p-5 min-h-screen ">
                <Link to='/' className="font-silkscreen ">
                    <h3 className=' text-3xl -tracking-[6px] font-semibold leading-none'>BISTRO BOSS</h3>
                    <p className='pl-[2px] text-xl tracking-[6px] leading-none'>RESTAURANT</p>
                </Link>

                <ul className='mt-16 uppercase'>
                    <li><NavLink className='flex items-center gap-2 my-4 font-medium' to='/dashboard/home'> <FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink className='flex items-center gap-2 my-4 font-medium' to='/dashboard/reservation'><FaCalendar></FaCalendar> reservation</NavLink></li>
                    <li><NavLink className='flex items-center gap-2 my-4 font-medium' to='/dashboard/payment-history'><FaAmazonPay /> payment history</NavLink></li>
                    <li><NavLink className='flex items-center gap-2 my-4 font-medium' to='/dashboard/my-cart'><FaCartPlus></FaCartPlus> my cart</NavLink></li>
                    <li><NavLink className='flex items-center gap-2 my-4 font-medium' to='/dashboard/add-review'><FaResolving></FaResolving> add review</NavLink></li>
                    <li><NavLink className='flex items-center gap-2 my-4 font-medium' to='/dashboard/my-booking'><FaBook></FaBook> my booking</NavLink></li>
                </ul>
                <div className="divider"></div>
                <ul className='uppercase'>
                    <li><NavLink className='flex items-center gap-2 my-4 font-medium' to='/'> <FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink className='flex items-center gap-2 my-4 font-medium' to='/menu'><TiThMenu /> MENU</NavLink></li>
                    <li><NavLink className='flex items-center gap-2 my-4 font-medium' to='/order/salads'><FaShopify /> Shop</NavLink></li>

                    <li><NavLink className='flex items-center gap-2 my-4 font-medium' to='/contact'> <LiaSmsSolid />Contact</NavLink></li>

                </ul>
            </div>
            <div className=" w-9/12 mx-auto py-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;