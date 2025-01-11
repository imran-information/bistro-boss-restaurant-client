import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import useAuth from '../../../../hooks/useAuth';
import { FaUsers, FaBoxes, FaShoppingCart, FaRedo } from "react-icons/fa";
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'pink'];
const AdminHome = () => {
    const { user} = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: stats = [], error, isPending, } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {

            const { data } = await axiosSecure.get('/admin-dashboard')
            return data
        }
    });

    const { data: barChat = [] } = useQuery({
        queryKey: ['admin-order-stats'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/order-stats')
            return data
        }
    })


    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    // console.log(stats);

    // Shape bar chart 
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    // pie chart 
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    console.log(barChat);
    const PieChartData = barChat.map(data => {
        return {
            name: data.category,
            value: data.revenue
        }

    })

    return (
        <div>
            <SectionTitle subTitle={"Hi,"} title={`welcome ${user?.displayName ? user?.displayName : "back"}`}></SectionTitle>
            {/* Admin stats  */}
            <div className="flex justify-around">
                <div className="bg-white shadow-lg rounded-lg p-6 w-60 flex items-center space-x-4">
                    <div className="text-5xl text-indigo-500">
                        <FaRedo></FaRedo>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Revenue</h3>

                        <p className="text-2xl">{stats?.total}</p>

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

            {/*  Chart section  */}
            <div className="flex bg-gray-100 my-20 items-center">
                {/* Shape bar  */}
                <div className="py-10 flex-1">
                    <BarChart
                        width={500}
                        height={300}
                        data={barChat}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {barChat.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>

                {/* PieChartWithCustomizedLabel */}
                <div className="flex-1">

                    <PieChart width={400} height={400}>
                        <Pie
                            data={PieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {PieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div>
            </div>

        </div>
    );
};

export default AdminHome;