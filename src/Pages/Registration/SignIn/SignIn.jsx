import React from 'react';
import { useForm } from 'react-hook-form';
import SocialMedia from '../../../Components/SocialMedia/SocialMedia';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SignIn = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }



    return (
        <div className='w-[60%] bg-white my-8'>
        <div className='h- bg-primary p-16'>
            <h2 className='text-white font-bold text-4xl uppercase text-center'>Are you ready for This challang</h2>
        </div>
        <form className='flex flex-col justify-center items-center gap-8 p-16' onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-4xl text-justify text-secondary'>Sign In</h1>

            {/* first label */}

            {/* email */}
            <input className="w-full outline-none border-b border-gray-300 text-gray-900 text-lg block p-2.5" {...register("email")} placeholder='Your Email' />
            {/* password */}
            <input className="w-full outline-none border-b border-gray-300 text-gray-900 text-lg block p-2.5" {...register("password")} placeholder='Enter strong Password' />
            <button type="submit" className="cursor-pointer text-white bg-primary hover:bg-secondary font-medium text-xl w-full sm:w-auto px-10  py-5 text-center ">
                Sign In
            </button>
        </form>

        <div className='text-center'>
            ------------OR SIGN IN WITH-----------
        </div>
        <SocialMedia></SocialMedia>
        <h4 className='text-xl text-center mb-8'>You have no account? please  <Link className='underline text-primary font-bold' to={'/signUp'}>Sign Up <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link></h4>
    </div>
    );
};

export default SignIn;