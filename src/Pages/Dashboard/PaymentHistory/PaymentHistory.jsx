import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const PaymentHistory = () => {
    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { isPending, error, data: payments } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/payments/${user?.email}`)
            return data
        }
    })
    if (loading || isPending) return <p>Loading..............</p>


    console.log(payments);
    return (
        <div className=''>
            <SectionTitle subTitle={'At a Glance!'} title={"PAYMENT HISTORY"}></SectionTitle>

            <div className="overflow-x-auto p-5 bg-slate-50 rounded ">
                <div className="uppercase flex justify-between items-center bg-[#D1A054] p-4 rounded-t-xl">
                    <div className="">
                        <h2 className="text-3xl uppercase">Total Payments: {payments.length}</h2>
                    </div>
                </div>
                <table className="table my-4">
                    {/* head */}
                    <thead>
                        <tr className='uppercase'>
                            <th>#</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Total PRICE</th>
                            <th>Payment date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {payments?.map((item, indx) => <tr key={item._id}>
                            <th>{indx + 1}</th>
                            <td> {item.email}</td>
                            <td> {item.name}</td>
                            <td>${item.price}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default PaymentHistory;