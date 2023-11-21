import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);



    return (
        <div>
            <div className='flex justify-center items-center bg-secondary py-24 relative'>
                <div className='absolute bottom-[-20%]'>
                    <img className="rounded-full w-36 h-36" src={user?.photoURL} alt="user profile pic" />
                    <span class="bottom-[20%] right-2 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                </div>
            </div>
            <div className='mt-24 mb-8 flex flex-col gap-4'>
                <div className='flex gap-4'>
                    <span>Full Name:</span>
                    <span>{user?.displayName}</span>
                </div>
                <div className='flex gap-4'>
                    <span>Email:</span>
                    <span>{user?.email}</span>
                </div>
                <div className='flex gap-4'>
                    <span>Address:</span>
                    <span></span>
                </div>
                <div className='flex gap-4'>
                    <span>Gender:</span>
                    <span></span>
                </div>
                <div className='flex justify-end mx-4'>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-fold rounded-lg px-5 py-2.5 me-2 mb-2 uppercase text-lg">Edit</button>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;