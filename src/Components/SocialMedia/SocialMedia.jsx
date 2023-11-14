import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SocialMedia = () => {
    return (
        <div className='flex flex-col gap-4 my-8'>
            <div className='flex gap-8 cursor-pointer text-xl items-center justify-center border border-gary-500 rounded-full w-[50%] p-2 mx-auto'>
                <FontAwesomeIcon className='text-2xl' icon={faGoogle}></FontAwesomeIcon>
                <p>GOOGLE</p>
            </div>
            <div className='flex gap-8 cursor-pointer text-xl items-center justify-center border border-gary-500 rounded-full w-[50%] p-2 mx-auto'>
                <FontAwesomeIcon className='text-2xl' icon={faGithub}></FontAwesomeIcon>
                <p>GITHUB</p>
            </div>
        </div>
    );
};

export default SocialMedia;