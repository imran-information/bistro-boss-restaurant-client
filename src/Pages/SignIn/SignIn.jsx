import React, { useContext, useEffect, useRef, useState } from 'react';
import SignInImage from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const SignIn = () => {
    const { signInUser } = useContext(AuthContext);
    const [disabled, setDisabled] = useState(true)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])


    const handleSignInUser = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {
                Swal.fire({
                    title: "Sign in successfully",
                    icon: "success",
                    draggable: true
                });
                console.log("SignIn user-->", result.user);
                navigate(from, { replace: true });
            })
        form.reset()

    }
    const handleCaptchaValidate = (e) => {
        const captchaValue = e.target.value;
        if (validateCaptcha(captchaValue)) {
            console.log("Done");
            setDisabled(false)
        } else {
            // alert('Captcha Does Not Match');
            setDisabled(true)
        }

    }

    return (
        <div className=' min-h-screen bg-authentication'>
            <div className="hero  min-h-screen">
                <h1 className="text-5xl font-bold text-center absolute top-20">Login now!</h1>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSignInUser} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" onBlur={handleCaptchaValidate} name='captcha' placeholder="type here" className="input input-bordered" required />
                                {/* <button onClick={handleCaptchaValidate} className="btn btn-primary btn-xs mt-2">Validate</button> */}

                            </div>

                            <div className="form-control mt-6">
                                {/* <button className="btn btn-primary">Login</button> */}
                                <input disabled={disabled} className="btn btn-neutral " type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center pb-2'>New here? <Link className='text-green-600' to='/signUp'>Create a New Account</Link></p>
                    </div>
                    <div className="">
                        <img src={SignInImage} alt="" srcset="" />
                    </div>
                </div>
            </div>
        </div>


    );
};

export default SignIn;