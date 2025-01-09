import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCart = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { refetch, isPending, error, data: carts = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        }
    })

    if (isPending) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message

    console.log(carts);
    return [carts, isPending, refetch]
};

export default useCart;