import React, { useEffect, useState } from 'react';
import PageHeader from '../../Components/PageHeader/PageHeader';
import PrimaryTitle from '../../Components/PrimaryTitle/PrimaryTitle';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('/public/courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    console.log(courses);

    return (
        <div>
            <PageHeader text={'Choose your course and boost your skills'}></PageHeader>
            <div className='my-16'>
                <PrimaryTitle text={'All Courses'}></PrimaryTitle>
                <div className='grid grid-cols-3 gap-y-16 my-20 justify-items-center'>
                    {
                        courses.map(course => <div
                            key={course.id}
                            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
                            <Link to={'/courses'}>
                                <img class="rounded-t-lg h-[50%] w-full hover:scale-105" src={course.img} alt="" />
                            </Link>
                            <div class="p-5 h-[50%]">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{course.name}</h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                {/* <div className='flex justify-between'>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                        {course.numberOfStudents}
                                        <p>Students</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                        {course.numberOfStudents}
                                        <p>Ratings</p>
                                    </div>
                                    <div className='text-2xl text-primary font-bold'>
                                        ${course.price}
                                    </div>
                                </div> */}
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;