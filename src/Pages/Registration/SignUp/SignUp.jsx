import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { register, handleSubmit, onSubmit } = useForm();
    console.log(onSubmit);



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
                    <input className="text-xl w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("firstName")} placeholder='First Name' />
                    {/* last name */}
                    <input className="text-xl w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("lastName")} placeholder='Last Name' />
                </div>
                {/* second label */}

                {/* email */}
                <input className="text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("email")} placeholder='Your Email' />
                {/* password */}
                <input className="text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("password")} placeholder='Enter strong Password' />
                {/* confirm password */}
                <input className="text-xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("confirmPassword")} placeholder='Confirm Password' />

                {/* <label>Gender Selection</label>
                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select> */}
                <button type="submit" className="cursor-pointer text-white bg-primary hover:bg-secondary font-medium text-xl w-full sm:w-auto px-10  py-5 text-center "> 
                Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;