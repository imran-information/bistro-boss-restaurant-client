import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useEffect } from "react";


export const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-restaurant-server-gold.vercel.app'
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { signOutUser } = useAuth()

    axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem('access-token')
        // console.log('Config Request', token);
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, error => {
        return Promise.reject(error);
    })

    axiosSecure.interceptors.response.use((response) => {
        return response;
    }, async error => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            await signOutUser()
            navigate('/signIn');
        }
        return Promise.reject(error);
    })


    return axiosSecure;

};

export default useAxiosSecure;