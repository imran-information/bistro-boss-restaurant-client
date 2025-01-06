import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosLocal from '../../hooks/useAxiosLocal';

const SocialSignIn = () => {
    const { googleSignIn } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    const axiosLocal = useAxiosLocal()

    const handleGoogleSignInUser = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email,
                    photo: result.user?.photoURL,
                }
                axiosLocal.post('/users', userInfo)
                    .then(res => {
                        console.log(res);

                        Swal.fire({
                            title: "Sign up successfully",
                            icon: "success",
                            draggable: true
                        });
                        navigate(from, { replace: true });

                    }).catch(err => {
                        console.log(err.message);
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: err.data.message
                        });
                    })

            }).catch(err => {
                console.log(err.message);
            })
    }

    return (
        <div className='p-8 pb-0 space-y-3'>
            <button onClick={handleGoogleSignInUser} className='btn btn-neutral w-full'><FaGoogle></FaGoogle> Google Sign In</button>
            <button className='btn btn-neutral w-full'><FaGithub></FaGithub> Github Sign In</button>
            <div className="divider">OR</div>
        </div>
    );
};

export default SocialSignIn;