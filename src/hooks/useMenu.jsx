import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import useAxiosLocal from './useAxiosLocal';

const useMenu = () => {
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)
    const axiosLocal = useAxiosLocal()
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/menus`)
            .then(res => res.json())
            .then(data => {
                setMenu(data)
                setLoading(false)
            })
    }, [])

    // const { data: menu, refetch, isPending: loading } = useQuery({
    //     queryKey: ['menus'],
    //     queryFn: async () => {
    //         const res = await axiosLocal.get('/menus')
    //         return res.data
    //         console.log(res.data);
    //     }
    // })

    return [menu, loading]
};

export default useMenu;