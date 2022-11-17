import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorMessage;

    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }
    if (error) {
        errorMessage = <p className='text-red-500'><small>Error: {error?.message}</small></p>
    }
    if (user) {
        navigate(from, { replace: true });
    }

    const resetpass = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Email Sent');
        }
        else {
            toast.error("Please enter your email!");
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;

        signInWithEmailAndPassword(email, pass);
    }

    return (
        <section className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login!</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input ref={emailRef} type="email" name='email' placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input ref={passRef} type="password" name='password' placeholder="Your Password" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <p><small onClick={resetpass} className='text-primary cursor-pointer'>Forget Password?</small></p>
                        <input className='btn btn-secondary w-full max-w-xs mt-5' type="submit" value="Login" />
                    </form>
                    {errorMessage}
                    <p><small>New to Travel? <Link className='text-accent' to="/register">Create a New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <SocialLogin></SocialLogin>
                    <ToastContainer />
                </div>
            </div>
        </section>
    );
};

export default Login;