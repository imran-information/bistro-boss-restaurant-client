import React, { useEffect, useRef, useState } from 'react';
import SignInImage from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const SignIn = () => {
    const captchaRef = useRef()
    const [disabled, setDisabled] = useState(true)
    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])


    const handleSignInUser = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

    }
    const handleCaptchaValidate = () => {
        const captchaValue = captchaRef.current.value;
        if (validateCaptcha(captchaValue)) {
            console.log("Done");
            setDisabled(false)
        } else {
            alert('Captcha Does Not Match');
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
                                <input type="text" ref={captchaRef} name='captcha' placeholder="type here" className="input input-bordered" required />
                                <button onClick={handleCaptchaValidate} className="btn btn-primary btn-xs mt-2">Login</button>

                            </div>

                            <div className="form-control mt-6">
                                {/* <button className="btn btn-primary">Login</button> */}
                                <input disabled={disabled} className="btn btn-neutral " type="submit" value="Login" />
                            </div>
                        </form>
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