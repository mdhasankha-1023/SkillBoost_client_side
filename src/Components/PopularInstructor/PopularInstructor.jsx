import React, { useEffect, useState } from 'react';
import PrimaryTitle from '../PrimaryTitle/PrimaryTitle';
import { Link } from 'react-router-dom';

const PopularInstructor = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch('/public/teachers.json')
            .then(res => res.json())
            .then(data => setInstructors(data))
    }, [])

    // console.log(instructors);


    return (
        <div className='my-16'>
            <PrimaryTitle text={'Popular Instructors'}></PrimaryTitle>
            <div className='grid grid-cols-3 gap-y-10 gap-x-20 my-20 justify-items-center'>
                {
                    instructors.map(instructor => <div
                        key={instructor.id}
                        class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex items-center h-40 cursor-pointer">
                        <figure className='h-full w-full'>
                            <img class="rounded-t-lg hover:scale-105 h-full w-full" src={instructor.insImg} alt="" />
                        </figure>
                        <div class="p-5 h-full w-full">
                            <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{instructor.insName}</h5>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;