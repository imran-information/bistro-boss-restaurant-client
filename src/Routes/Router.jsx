import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Menu from '../Pages/Menu/Menu/Menu';
import Order from '../Pages/Order/Order/Order';
import SignUp from '../Pages/SignUp/SignUp';
import SignIn from '../Pages/SignIn/SignIn';
import Secret from '../Pages/Shared/Secret/Secret';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from '../Layout/dashboard';
import UserHome from '../Pages/Dashboard/UserHome/UserHome';
import Reservation from '../Pages/Dashboard/Reservation/Reservation';
import PaymentHistory from '../Pages/Dashboard/PaymentHistory/PaymentHistory';
import MyCart from '../Pages/Dashboard/MyCart/MyCart';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'signIn',
                element: <SignIn></SignIn>
            },
            {
                path: 'secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'home',
                element: <UserHome></UserHome>
            },
            {
                path: 'reservation',
                element: <Reservation></Reservation>
            },
            {
                path: 'payment-history',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'my-cart',
                element: <MyCart></MyCart>
            },
        ]
    }
]);

