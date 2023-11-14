import React from 'react';
import { useForm } from 'react-hook-form';
import SocialMedia from '../../../Components/SocialMedia/SocialMedia';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SignUp = () => {
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
                <h1 className='text-4xl text-justify text-secondary'>Sign Up</h1>
                {/* first label */}
                <div className='flex items-center gap-8 w-full'>
                    {/* first name */}
                    <input className="w-1/2 outline-none border-b border-gray-300 text-gray-900 text-lg block p-2.5" {...register("firstName")} placeholder='First Name' />
                    {/* last name */}
                    <input className="w-1/2 outline-none border-b border-gray-300 text-gray-900 text-lg block p-2.5" {...register("lastName")} placeholder='Last Name' />
                </div>
                {/* second label */}

                {/* email */}
                <input className="w-full outline-none border-b border-gray-300 text-gray-900 text-lg block p-2.5" {...register("email")} placeholder='Your Email' />
                {/* password */}
                <input className="w-full outline-none border-b border-gray-300 text-gray-900 text-lg block p-2.5" {...register("password")} placeholder='Password' />
                {/* repeat password */}
                <input className="w-full outline-none border-b border-gray-300 text-gray-900 text-lg block p-2.5" {...register("confirmPassword")} placeholder='Repeat Password' />
                <div className='flex items-center gap-8 w-full'>
                    {/* gender selection */}
                    <select className="w-full cursor-pointer outline-none border-b border-gray-300 text-gray-900 text-lg block p-2.5"  {...register("gender")}>
                        <option>Gender select</option>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                    {/* photo url */}
                    <input className="block w-full text-sm text-gray-900 border-b border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file" />

                </div>
                <button type="submit" className="cursor-pointer text-white bg-primary hover:bg-secondary font-medium text-xl w-full sm:w-auto px-10  py-5 text-center ">
                    Sign Up
                </button>
            </form>

            <div className='text-center'>
                ------------OR SIGN UP WITH-----------
            </div>
            <SocialMedia></SocialMedia>
            <h4 className='text-xl text-center mb-8'>Already have an account!! please  <Link className='underline text-primary font-bold' to={'/signIn'}>Sign In <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link></h4>
        </div>
    );
};

export default SignUp;