import React, { useState } from 'react';
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import FoodDetails from '../../Pages/Shared/Modal/FoodDetails';

const FoodCard = ({ items }) => {
    const { _id, name, recipe, image, price } = items || {};
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [carts, isPending, refetch] = useCart();
    const [isOpen, setIsOpen] = useState(false);


    const handleAddToCart = (food) => {
        if (user && user.email) {
            const foodInfo = {
                email: user.email,
                id: _id,
                name,
                price,
                image
            };
            axiosSecure.post('/carts', foodInfo)
                .then(res => {
                    if (res.data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${name} added to cart`,
                            showConfirmButton: false,
                            timer: 1500,
                            background: '#1a1a1a',
                            color: '#fff'
                        });
                    }
                });
        } else {
            Swal.fire({
                title: "Please Sign In",
                text: "You need to sign in to add items to your cart",
                icon: "info",
                showCancelButton: true,
                confirmButtonColor: "#d4af37",
                cancelButtonColor: "#333",
                confirmButtonText: "Sign In",
                background: '#1a1a1a',
                color: '#fff'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signIn', { state: { from: location } });
                }
            });
        }
    };

    return (
        <div className="relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            {/* Image with overlay */}
            <div className="relative overflow-hidden h-48">
                <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={image}
                    alt={name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <span className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    ${price}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {recipe}
                </p>

                {/* Buttons */}
                <div className="flex justify-between gap-3">
                    <button onClick={() => setIsOpen(true)}
                        className="px-4 py-2 text-xs uppercase font-bold text-amber-400 bg-black rounded-lg hover:bg-gray-800 transition-all duration-200 ease-in-out transform hover:scale-[1.02] active:scale-95 shadow hover:shadow-md"
                    >
                        Details
                    </button>
                    <button
                        onClick={() => handleAddToCart(items)}
                        className="px-4 py-2 text-xs border-0 border-b-2 uppercase text-subTitle-color font-bold border-black rounded-lg hover:bg-black hover:text-white transition-all duration-200 ease-in-out transform hover:scale-[1.02] active:scale-95"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
            {/* food details modal  */}
            <FoodDetails isOpen={isOpen} setIsOpen={setIsOpen} items={items} handleAddToCart={handleAddToCart} />
        </div>
    );
};

export default FoodCard;