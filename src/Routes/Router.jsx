import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Menu from '../Pages/Menu/Menu/Menu';
import Order from '../Pages/Order/Order/Order';
import SignUp from '../Pages/SignUp/SignUp';
import SignIn from '../Pages/SignIn/SignIn';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from '../Layout/Dashboard';
import UserHome from '../Pages/Dashboard/UserHome/UserHome';
import Reservation from '../Pages/Dashboard/Reservation/Reservation';
import PaymentHistory from '../Pages/Dashboard/PaymentHistory/PaymentHistory';
import MyCart from '../Pages/Dashboard/MyCart/MyCart';
import AdminHome from '../Pages/Dashboard/Admin/AdminHome/AdminHome';
import AddItems from '../Pages/Dashboard/Admin/AddItems/AddItems';
import ManageItems from '../Pages/Dashboard/Admin/ManageItems/ManageItems';
import ManageBooking from '../Pages/Dashboard/Admin/ManageBooking/ManageBooking';
import AllUsers from '../Pages/Dashboard/Admin/AllUsers/AllUsers';
import AdminRoute from './AdminRoute/AdminRoute';
import UpdateItem from '../Pages/Dashboard/Admin/UpdateItem/UpdateItem';
import Payment from '../Pages/Payment/Payment';


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
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [

            // admin access
            {
                path: 'home',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'add-items',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: 'manage-items',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: 'update-item/:id',
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/menus/${params.id}`)
            },
            {
                path: 'manage-bookings',
                element: <AdminRoute><ManageBooking></ManageBooking></AdminRoute>
            },
            {
                path: 'all-users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },

            // users access
            {
                path: 'home',
                element: <UserHome></UserHome>
            },
            {
                path: 'reservation',
                element: <Reservation></Reservation>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'payment-history',
                element: <PaymentHistory></PaymentHistory>,
            },
            {
                path: 'my-cart',
                element: <MyCart></MyCart>
            },
        ]
    }
]);

