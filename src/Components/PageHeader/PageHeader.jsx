import React from 'react';

const PageHeader = ({text}) => {
    return (
        <div className='relative'>
            <div className='h-full w-full bg-slide2-bg py-56 bg-no-repeat bg-center bg-cover brightness-75'>
            </div>
            <div className='absolute top-[20%] left-[20%] right-[20%]'>
                <h1 className='text-6xl font-bold text-white text-center'>{text}</h1>
                <div className='flex gap-8 justify-center my-8'>
                    <button type="submit" className="cursor-pointer text-white border border-white hover:bg-secondary font-medium text-xl w-full sm:w-auto px-10  py-5 text-center ">
                        Read More
                    </button>
                    <button type="submit" className="cursor-pointer text-white bg-primary hover:bg-secondary font-medium text-xl w-full sm:w-auto px-10  py-5 text-center ">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;