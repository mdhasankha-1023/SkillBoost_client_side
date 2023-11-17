import React from 'react';
import { Outlet } from 'react-router-dom';

const Other = () => {
    return (
        <div className='bg-registration-bg bg-center bg-no-repeat bg-cover h-[100vh] w-full flex items-center justify-center scroll-smooth'>
            <Outlet></Outlet>
        </div>
    );
};

export default Other;