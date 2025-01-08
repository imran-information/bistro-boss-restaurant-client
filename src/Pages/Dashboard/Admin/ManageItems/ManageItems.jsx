import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../../hooks/useMenu';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menu, loading, refetch] = useMenu()
    const axiosSecure = useAxiosSecure()
    const handleMenuItemUpdate = (id) => {
        console.log(id);
    }
    const handleMenuItemDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menus/${id}`)
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your item has been deleted",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }
    if (loading) return <h1>Loading......!</h1>

    return (
        <div className=''>
            <SectionTitle subTitle={"Hurry Up!"} title={"MANAGE ALL ITEMS"}> </SectionTitle>
            <div className="overflow-x-auto p-5 bg-slate-50 rounded ">
                <div className="uppercase">
                    <div className="">
                        <h2 className="text-3xl ">Total orders: {menu.length}</h2>
                    </div>

                </div>
                <table className="table my-4 ">
                    {/* head */}
                    <thead className=' '>
                        <tr className='text-base bg-[#D1A054] rounded-3xl text-white'>
                            <th>NO</th>
                            <th>ITEM IMAGE</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>UPDATE</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody className='text-base'>
                        {/* row 1 */}
                        {menu?.map((item, indx) => <tr key={item._id}>
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
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.name}

                            </td>
                            <td >${item.price}</td>
                            <th>

                                <Link to={`/dashboard/update-item/${item._id}`}>
                                    <button onClick={() => handleMenuItemUpdate(item._id)} className='btn btn-neutral border-0  bg-[#D1A054] text-xl text-white'>
                                        <FaEdit></FaEdit>

                                    </button></Link>
                            </th>
                            <th>
                                <button onClick={() => handleMenuItemDelete(item._id)} className='btn btn-error text-xl text-white'>
                                    <FaTrashAlt />

                                </button>
                            </th>
                        </tr>)}


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageItems; 