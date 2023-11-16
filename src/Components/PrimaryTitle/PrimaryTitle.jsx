import React from 'react';

const PrimaryTitle = ({text}) => {
    return (
        <div className='my-4'>
            <h1 className='text-4xl  uppercase text-secondary text-center font-bold'>{text}</h1>
            <hr className='w-[5%] h-1 bg-primary mx-auto mt-4'  />
        </div>
    );
};

export default PrimaryTitle;