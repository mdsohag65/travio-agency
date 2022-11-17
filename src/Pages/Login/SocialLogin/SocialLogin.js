import React from 'react';
import google from '../../../images/social/google.png';
import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    let errorMessage;
    if (gError || error) {

        errorMessage = <p className='text-red-500'><small>Error: {gError?.message} {error?.message}</small></p>


    }
    if (gUser || user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            {errorMessage}
            <button onClick={() => signInWithGoogle()} className='btn btn-primary w-full max-w-xs'>
                <img style={{ width: 24, marginRight: 3 }} src={google} alt="" />
                Google Sign In
            </button>
            <button onClick={() => signInWithGithub()} className='mt-3 btn btn-primary w-full max-w-xs'>
                <img style={{ width: 24, marginRight: 3 }} src={github} alt="" />
                Github Sign In
            </button>
        </div>
    );
};

export default SocialLogin;