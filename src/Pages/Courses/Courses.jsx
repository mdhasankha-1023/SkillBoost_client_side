import React, { useEffect, useState } from 'react';
import PageHeader from '../../Components/PageHeader/PageHeader';
import PrimaryTitle from '../../Components/PrimaryTitle/PrimaryTitle';
import { Link, useLoaderData } from 'react-router-dom';
import useAllCourse from '../../Hooks/useAllCourse';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
    const [data, isPending] = useAllCourse();

    console.log(data);

    if (isPending) {
        return <span className='text-xl'>Loading...</span>
    }


    return (
        <div>
            <PageHeader text={'Choose your course and boost your skills'}></PageHeader>
            <div className='my-16'>
                <PrimaryTitle text={'All Courses'}></PrimaryTitle>
                <div className='grid grid-cols-3 gap-y-16 my-20 justify-items-center'>
                    {
                        data?.map(course => <CourseCard
                        key={course._id}
                        course={course}
                        ></CourseCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;