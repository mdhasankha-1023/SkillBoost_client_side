import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import SocialMedia from '../../../Components/SocialMedia/SocialMedia';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { data } from 'autoprefixer';

const SignUp = () => {
    const { google, github, signUpWithEmailAndPassword, successModal, errorModal } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
    const newPassword = watch('password');
    const navigate = useNavigate();
    // form data
    const onSubmit = (data) => {
        const { fullName, email, gender, confirmPassword, password, photoUrl } = data;
        const img = photoUrl[0].name;
        const userInfo = {
            name: fullName,
            email: email,
            role: 'student',
            gender: gender,
            picture: photoUrl
        }

        // authentication with email and password
        signUpWithEmailAndPassword(email, password)
            .then(res => {
                const result = res.user;
                console.log(result);

                // post userInfo in server
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            successModal('Account created Successfully. Please log-in');
                            navigate('/signIn')
                            reset();
                        }
                        else {
                            successModal(data.message)
                        }
                    })
                    .catch(err => errorModal(err.message))
            })
            .catch(err => errorModal(err.message))
    }

    // handle google btn
    const handleGoogleBtn = () => {
        google()
            .then(res => {
                const result = res.user;
                console.log(result);
                const userInfo = {
                    name: result.displayName,
                    picture: result.photoURL,
                    email: result.email,
                    role: 'student',
                    gender: null
                }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        successModal('Login Successfully');
                        navigate('/')
                    })
                    .catch(err => errorModal(err.message))
            })
            .catch(err => errorModal(err.message))
    }

    // handle github btn
    const handleGithubBtn = () => {
        github()
            .then(res => {
                const result = res.user;
                // console.log(result);
                const userInfo = {
                    name: result.displayName,
                    picture: result.photoURL,
                    email: result.email,
                    role: 'student',
                    gender: null
                }

                // console.log(userInfo);
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        successModal('');
                        navigate('/')
                    })
                    .catch(err => errorModal(err.message))
            })
            .catch(err => errorModal(err.message))
    }


    return (
        <div className='w-[80%] bg-white my-8 flex'>
            <div className='bg-primary p-16 w-1/2 flex items-center'>
                <h2 className='text-white font-bold text-4xl uppercase text-center leading-tight tracking-wider'>Are you ready for This challang</h2>
            </div>
            <div className='w-1/2'>
                <form className='flex flex-col justify-center items-center gap-8 p-8' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-4xl text-justify text-secondary'>Sign Up</h1>
                    {/* first label */}
                    <div className='flex items-center gap-8 w-full'>
                        {/* full name */}
                        <div className='w-1/2'>
                            <input className="w-full outline-none border-b border-gray-300 text-gray-900 text-lg block p-2.5" {...register("fullName", { required: 'Name is required' })} placeholder='Full Name' />
                            {errors.fullName && <p role="alert" className='text-red-500 font-bold mt-2 text-md'>{errors.fullName.message}</p>}
                        </div>
                        {/* email */}
                        <div className='w-1/2'>
                            <input className="w-full outline-none border-b border-gray-300 text-gray-900 text-lg block p-2.5" {...register("email", { required: 'Email is required' })} placeholder='Your Email' />
                            {errors.email && <p role="alert" className='text-red-500 font-bold mt-2 text-md'>{errors.email.message}</p>}
                        </div>
                    </div>
                    {/* second label */}
                    <div className='flex items-center gap-8 w-full'>
                        {/* password */}
                        <div className='w-1/2'>
                            <input className="w-full outline-none border-b border-gray-300 text-gray-900 text-lg block p-2.5" {...register("password", {
                                required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 8 characters long' }, pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#]).{6,}$/,
                                    message: 'Password must contain at least one uppercase letter, one lowercase letter, and @/#'
                                }
                            })}
                                placeholder='Password' />
                            {errors.password && <p role="alert" className='text-red-500 font-bold mt-2 text-md'>{errors.password.message}</p>}
                        </div>
                        {/* repeat password */}
                        <div className='w-1/2'>
                            <input className="w-full outline-none border-b border-gray-300 text-gray-900 text-lg block p-2.5" {...register("confirmPassword", {
                                required: 'Password not matching', validate: (value) => {
                                    return value == newPassword || 'Password not matching'
                                }
                            })} placeholder='Repeat Password' />
                            {errors.confirmPassword && <p className='text-red-500 font-bold mt-2 text-md'>{errors.confirmPassword.message}</p>}

                        </div>
                    </div>

                    {/* label three */}
                    <div className='flex items-center gap-8 w-full'>
                        {/* gender selection */}
                        <div className='w-1/2'>
                            <select className="w-full cursor-pointer outline-none border-b border-gray-300 text-gray-900 text-lg block p-2.5"  {...register("gender", { required: 'One option must be selected' })}>
                                <option value="">Select gender</option>
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select>
                            {errors.gender && <p role="alert" className='text-red-500 font-bold mt-2 text-md'>{errors.gender.message}</p>}
                        </div>
                        {/* photo url */}
                        <div className='w-1/2'>
                            <input className="block w-full text-sm text-gray-900 border-b border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" {...register("photoUrl", { required: 'Photo url is required' })} type="file" />
                            {errors.photoUrl && <p role="alert" className='text-red-500 font-bold mt-2 text-md'>{errors.photoUrl.message}</p>}
                        </div>
                    </div>
                    <button type="submit" className="cursor-pointer text-white bg-primary hover:bg-secondary font-medium text-xl w-full sm:w-auto px-10  py-5 text-center ">
                        Sign Up
                    </button>
                </form>

                <div className='text-center'>
                    ------------OR SIGN UP WITH-----------
                </div>
                <SocialMedia googleHandler={handleGoogleBtn} githubHandler={handleGithubBtn}></SocialMedia>
                <h4 className='text-xl text-center mb-8'>Already have an account!! please  <Link className='underline text-primary font-bold' to={'/signIn'}>Sign In <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link></h4>
            </div>

        </div>
    );
};

export default SignUp;