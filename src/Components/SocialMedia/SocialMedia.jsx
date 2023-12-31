import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SocialMedia = ({googleHandler, githubHandler}) => {
    return (
        <div className='flex flex-col gap-4 my-8'>
            <div onClick={googleHandler} className='flex gap-8 cursor-pointer text-xl items-center justify-center border border-gary-500 hover:border-[#085CE8] rounded-full w-[80%] p-2 mx-auto'>
                <FontAwesomeIcon className='text-2xl text-[#085CE8]' icon={faGoogle}></FontAwesomeIcon>
                <p>GOOGLE</p>
            </div>
            <div onClick={githubHandler} className='flex gap-8 cursor-pointer text-xl items-center justify-center border border-gary-500 hover:border-[#000000] rounded-full w-[80%] p-2 mx-auto'>
                <FontAwesomeIcon className='text-2xl' icon={faGithub}></FontAwesomeIcon>
                <p>GITHUB</p>
            </div>
        </div>
    );
};

export default SocialMedia;