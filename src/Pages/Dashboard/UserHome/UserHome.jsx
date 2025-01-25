import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAuth from '../../../hooks/useAuth';
import { Card, CardContent, Typography, Avatar } from "@mui/material";
import { ShoppingCart, MenuBook, Phone } from "@mui/icons-material";

const UserHome = () => {
    const { user } = useAuth()

    return (
        <div className="min-h-screen">
            {/* Greeting */}
            <Typography fontSize={'48px'} variant="h5" >
                Hi, Welcome Back!
            </Typography>

            {/* Top Cards */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                <Card
                    sx={{
                        background: "linear-gradient(to right, #BB34F5, #FCDBFF)",
                        color: "white",
                    }}
                    className="rounded-lg shadow-md"
                >
                    <CardContent className="flex items-center justify-center gap-6">
                        <MenuBook style={{ fontSize: "88px" }} />
                        <div >
                            <Typography fontWeight={"bold"} fontSize={'30px'} variant="h6" >
                                205
                            </Typography>
                            <Typography fontWeight={"bold"} fontSize={'30px'}>Menu</Typography>
                        </div>
                    </CardContent>
                </Card>

                <Card
                    sx={{
                        background: "linear-gradient(to right, #D3A256, #FDE8C0)",
                        color: "white",
                    }}
                    className="rounded-lg shadow-md"
                >
                    <CardContent className="flex items-center justify-center gap-6">
                        <ShoppingCart style={{ fontSize: "88px" }} />
                        <div>
                            <Typography fontWeight={"bold"} variant="h6" fontSize={'30px'} >
                                103
                            </Typography>
                            <Typography fontWeight={"bold"} fontSize={'30px'} >Shop</Typography>
                        </div>
                    </CardContent>
                </Card>

                <Card
                    sx={{
                        background: "linear-gradient(to right, #FE4880, #FECDE9)",
                        color: "white",
                    }}
                    className="rounded-lg shadow-md"
                >
                    <CardContent className="flex items-center justify-center gap-6">
                        <Phone style={{ fontSize: "70px" }} />
                        <div>
                            <Typography fontWeight={'bold'} fontSize={'30px'} variant="h6" >
                                03
                            </Typography>
                            <Typography fontWeight={'bold'} fontSize={'30px'}>Contact</Typography>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Profile and Activities */}
            <div className="grid grid-cols-2 gap-4">
                <Card style={{ backgroundColor: '#FFEDD5' }} >
                    <CardContent className="flex flex-col items-center">
                        <Avatar color='#D1A054' style={{ width: '200px', height: '200px', border: '4px', }} className="w-52 h-52 mb-4 bg-white border-2 border-orange-300" />
                        <Typography className="font-bold">Awlad Hossain</Typography>
                    </CardContent>
                </Card>

                <Card className="bg-yellow-100">
                    <CardContent>
                        <Typography variant="h6" className="mb-4 font-bold">
                            Your Activities
                        </Typography>
                        <ul className="space-y-2 text-blue-800">
                            <li>
                                <span className="font-bold text-blue-500">Orders:</span> 6
                            </li>
                            <li>
                                <span className="font-bold text-blue-500">Reviews:</span> 2
                            </li>
                            <li>
                                <span className="font-bold text-blue-500">Bookings:</span> 1
                            </li>
                            <li>
                                <span className="font-bold text-red-500">Payment:</span> 3
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default UserHome;