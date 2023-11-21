import React from 'react';
import PrimaryTitle from '../../../../Components/PrimaryTitle/PrimaryTitle';
import useAllCourse from '../../../../Hooks/useAllCourse';

const ManageClasses = () => {
    const [data, isPending] = useAllCourse();

    if(isPending){
        return <p className='text-xl'>Loading...</p>
    }



    return (
        <div>
            <PrimaryTitle text={'Manage Courses'}></PrimaryTitle>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                    {/* table head */}
                    <thead className="text-lg text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-16 py-3 text-center">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Ins. Name & Email
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Available <br /> sites
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Action
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Feedback
                            </th>
                        </tr>
                    </thead>

                    {/* table body */}
                    <tbody>
                        {
                            data.map(course => <tr 
                            key={course._id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

                            {/* image */}
                            <td className="p-4">
                                <img src={course.img} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                            </td>

                            {/* name */}
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-center">
                                {course.name}
                            </td>

                            {/* ins name & email */}
                            <td className="px-6 py-4 text-center">
                                {course.instructorName} <br /> {course.instructorEmail}
                            </td>

                            {/* price */}
                            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-center">
                                ${course.price}
                            </td>

                            {/* available sites */}
                            <td className="px-6 py-4 text-center">
                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">{course.availableSites}</a>
                            </td>

                            {/* status */}
                            <td className="px-6 py-4 text-center">
                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">{course.status}</a>
                            </td>

                            {/* action */}
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Action</a>
                            </td>

                            {/* feedback btn */}
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Feedback</a>
                            </td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageClasses;