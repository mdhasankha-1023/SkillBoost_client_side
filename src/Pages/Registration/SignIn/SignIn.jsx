import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import SocialMedia from '../../../Components/SocialMedia/SocialMedia';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const SignIn = () => {
    const { google, github, logInWithEmailAndPassword, successModal,
        errorModal, } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    // form data
    const onSubmit = (data) => {
        const { email, password } = data;
        console.log(email, password);

        // authentication with email and password
        logInWithEmailAndPassword()
            .then(res => {
                const result = res.user;
                console.log(result);
                successModal('SignIn Successfully')
                reset();
                navigate('/')
            })
            .catch(err => errorModal(err.message))
    }

    // handle google btn
    const handleGoogleBtn = () => {
        google()
            .then(res => {
                const result = res.user;
                console.log(result);
                successModal('SignIn successfully');
                navigate('/')
            })
            .catch(err => errorModal(err.message))
    }

    // handle github btn
    const handleGithubBtn = () => {
        github()
            .then(res => {
                const result = res.user;
                console.log(result);
                successModal('SignIn successfully'),
                navigate('/')
            })
            .catch(err => errorModal(err.message))
    }



    return (
        <div className='w-[80%] bg-white my-8 flex'>
            <div className='w-1/2 bg-primary p-8 flex items-center'>
                <h2 className='text-white font-bold text-4xl uppercase text-center leading-tight tracking-wider'>Are you ready for This challang</h2>
            </div>
            <div className='w-1/2'>
                <form className='flex flex-col justify-center items-center gap-8 p-16' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-4xl text-justify text-secondary'>Sign In</h1>

                    {/* first label */}

                    {/* email */}
                    <div className='w-full'>
                        <input className="w-full outline-none border-b border-gray-300 text-gray-900 text-lg block p-2.5" {...register("email", { required: 'Please fill this field' })} placeholder='Email' />
                        {errors.email && <p role="alert" className='text-red-500 font-bold mt-2 text-md'>{errors.email.message}</p>}
                    </div>

                    {/* password */}
                    <div className='w-full'>
                        <input className="w-full outline-none border-b border-gray-300 text-gray-900 text-lg block p-2.5" {...register("password", { required: 'Please fill this field' })} placeholder='Password' />
                        {errors.password && <p role="alert" className='text-red-500 font-bold mt-2 text-md'>{errors.password.message}</p>}
                    </div>

                    <button type="submit" className="cursor-pointer text-white bg-primary hover:bg-secondary font-medium text-xl w-full sm:w-auto px-10  py-5 text-center ">
                        Sign In
                    </button>
                </form>

                <div className='text-center'>
                    ------------OR SIGN IN WITH-----------
                </div>
                <SocialMedia githubHandler={handleGithubBtn} googleHandler={handleGoogleBtn}></SocialMedia>
                <h4 className='text-xl text-center mb-8'>Not a member yet? please  <Link className='underline text-primary font-bold' to={'/signUp'}>Sign Up <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link></h4>
            </div>
        </div>
    );
};

export default SignIn;