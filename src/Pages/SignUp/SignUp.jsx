import { Link, useLocation, useNavigate } from "react-router-dom";
import SignInImage from '../../assets/others/authentication2.png'
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form"
import Swal from 'sweetalert2'
import useAxiosLocal from "../../hooks/useAxiosLocal";
import SocialSignIn from "../../components/SocialSignIn/SocialSignIn";

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    const axiosLocal = useAxiosLocal()
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {

        createUser(data.email, data.password)
            .then(result => {
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            photo: data.photoURL
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
                                reset()
                            })
                    }).catch((error) => {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: error.message,
                        });
                    })
                console.log("User---> ", result.user);

            })

    }

    // const handleSignUpUser = (e) => {
    //     e.preventDefault()
    //     const form = e.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     createUser(email, password)
    //         .then(result => {
    //             console.log("User---> ", result.user);
    //         })
    //     form.reset()
    // }

    return (
        <div className=' min-h-screen bg-authentication'>
            <div className="hero  min-h-screen">
                <h1 className="text-5xl font-bold text-center absolute top-20">Sign Up now!</h1>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="">
                        <img src={SignInImage} alt="" srcset="" />
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <SocialSignIn></SocialSignIn>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body pt-0">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' {...register("name", { required: true })} placeholder="name" className="input input-bordered" required />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" name='photoURL' {...register("photoURL", { required: true })} placeholder="photo URL" className="input input-bordered" required />
                                {errors.photoURL && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' {...register("password", { required: true, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === 'minLength' && <span className="text-red-500">Password must be 6 characters</span>}
                                {errors.password?.type === 'required' && <span className="text-red-500">This field is required</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-500">Password must be one uppercase, one lowercase, and special characters</span>}
                            </div>
                            <input className="btn btn-neutral " type="submit" value="Register" />
                        </form>
                        <p className='text-center pb-2'>Already registered?  <Link className='text-green-600' to='/signIn'>Go to log in</Link></p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default SignUp;
