import React from 'react';
import useInstructorCourses from '../../../../Hooks/useInstructorCourses';
import PrimaryTitle from '../../../../Components/PrimaryTitle/PrimaryTitle';

const MyclassNames = () => {
    const [data, isPending] = useInstructorCourses();
    console.log(data);
    if(isPending){
        return <p className='text-lg'>Loading...</p>
    }

    return (
        <div>
            <PrimaryTitle text={'My Courses'}></PrimaryTitle>
            <div>
                {
                    data.map(course => <div
                        key={course._id}
                        classNam="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex">
                        <figure>
                            <img classNam="p-8 rounded-t-lg" src={course.img} alt="course image" />
                        </figure>
                        <div classNam="px-5 pb-5">
                            <h5 classNam="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{course.name}</h5>


                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyclassNames;