import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { FaUsers } from 'react-icons/fa6';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { isPending, error, data: users, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () =>
            axiosSecure.get('/users')
                .then(res => {
                    return res.data
                })
    })

    if (isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message




    const handleMakeAdmin = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be this person admin..? ",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Admin it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${id}`)
                    .then(res => {
                        refetch()
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "User Admin successfully..",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }).catch(err => {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong!",
                        });
                    })
            }
        });

    }
    const handleUserDelete = (id) => {
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
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {

                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                position: "top-center",
                                icon: "success",
                                title: "User Deleted successfully..",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    }).catch(err => {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong!",
                        });
                    })
            }
        });

    }


    return (
        <div>
            <SectionTitle subTitle={"How many??"} title={"MANAGE ALL USERS"}> </SectionTitle>
            <div className="overflow-x-auto p-5 bg-slate-50 rounded ">
                <div className="uppercase flex justify-between items-center bg-[#D1A054] p-4 rounded-t-xl">
                    <div className="">
                        <h2 className="text-3xl ">Total Users: {users.length}</h2>
                    </div>
                </div>
                <table className="table my-4">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>USER NAME</th>
                            <th>EMAIL</th>
                            <th>ROLE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {users?.map((user, indx) => <tr key={user._id}>
                            <th>{indx + 1}</th>
                            <td>  {user.name} </td>
                            <td> {user.email}</td>
                            <th>
                                {
                                    user.role === 'admin' ? <p className='text-green-500'>Admin</p> : <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-neutral btn-sm  border-0 bg-[#D1A054] text-xl text-white'>
                                        <FaUsers></FaUsers>
                                    </button>
                                }
                            </th>
                            <th>
                                <button onClick={() => handleUserDelete(user._id)} className='btn btn-error btn-sm text-xl text-white'>
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

export default AllUsers;