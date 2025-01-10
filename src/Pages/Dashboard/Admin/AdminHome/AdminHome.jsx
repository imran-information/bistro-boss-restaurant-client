import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import useAuth from '../../../../hooks/useAuth';
import { FaUsers, FaBoxes, FaShoppingCart, FaRedo } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const AdminHome = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: stats = [], error, isPending } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/admin-dashboard')
            return data
        }
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    // console.log(stats);

    return (
        <div>
            <SectionTitle subTitle={"Hi,"} title={`welcome ${user?.displayName ? user?.displayName : "back"}`}></SectionTitle>

            <div className="flex justify-around">
                <div className="bg-white shadow-lg rounded-lg p-6 w-60 flex items-center space-x-4">
                    <div className="text-5xl text-indigo-500">
                        <FaRedo></FaRedo>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Revenue</h3>
                        <p className="text-2xl">{stats?.totalPriceResult[0].total}</p>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 w-60 flex items-center space-x-4">
                    <div className="text-5xl text-indigo-500">
                        <FaUsers></FaUsers>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Customer</h3>
                        <p className="text-2xl">{stats?.totalCustomer}</p>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 w-60 flex items-center space-x-4">
                    <div className="text-5xl text-indigo-500">
                        <FaShoppingCart></FaShoppingCart>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Products</h3>
                        <p className="text-2xl">{stats.totalMenuItems}</p>
                    </div>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-6 w-60 flex items-center space-x-4">
                    <div className="text-5xl text-indigo-500">
                        <FaBoxes></FaBoxes>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Orders</h3>
                        <p className="text-2xl">{stats?.totalOrder}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminHome;