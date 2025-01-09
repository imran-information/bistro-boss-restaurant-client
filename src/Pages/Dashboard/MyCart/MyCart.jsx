import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useCart from '../../../hooks/useCart';
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [carts, isPending, refetch] = useCart()
    const axiosSecure = useAxiosSecure();
    if (isPending) return <h1>Loading......!</h1>
    const totalPrice = carts?.reduce((prv, cuv) => prv + cuv.price, 0)


    const handleCartItemDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.acknowledged > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                    })

            }
        });

    }

    return (
        <div className=''>
            <SectionTitle subTitle={'My Cart'} title={"WANNA ADD MORE?"}></SectionTitle>

            <div className="overflow-x-auto p-5 bg-slate-50 rounded ">
                <div className="uppercase flex justify-between items-center bg-[#D1A054] p-4 rounded-t-xl">
                    <div className="">
                        <h2 className="text-3xl ">Total orders: {carts.length}</h2>
                    </div>
                    <div className="">
                        <h2 className="text-3xl">total price: {totalPrice}</h2>
                    </div>
                    {
                        carts.length ? < Link to='/dashboard/payment'>
                            <div className="text-3xl">
                                <button className="btn btn-wide btn-neutral">Pay</button>
                            </div>
                        </Link> : <button disabled className="btn btn-wide btn-neutral">Pay</button>
                    }

                </div>
                <table className="table my-4">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {carts?.map((item, indx) => <tr key={item._id}>
                            <th>{indx + 1}</th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={item.image}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            {item.email}
                                        </div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.name}
                                <br />
                                {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                            </td>
                            <td>${item.price}</td>
                            <th>
                                <button onClick={() => handleCartItemDelete(item._id)} className='btn btn-error text-xl text-white'>
                                    <FaTrashAlt />
                                </button>
                            </th>
                        </tr>)}


                    </tbody>

                </table>
            </div>
        </div >
    );
};

export default MyCart;