import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';


const SignUp = () => {
    useEffect(() => {
        loadCaptchaEnginge
    }, [])




    return (
        <div className=" bg-base-200 min-h-screen px-10 py-20  mx-auto">
            <div className="hero-content max-w-full  flex-col">
                <h1 className="text-2xl font-bold">Register now!</h1>
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                {}
                            </label>
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" placeholder="Captcha" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            {/* <button className="btn btn-neutral">Register</button> */}
                            <input className="btn btn-neutral" type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
