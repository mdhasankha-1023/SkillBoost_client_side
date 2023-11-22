import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const CourseCard = ({ course }) => {
    const {user, successModal, errorModal} = useContext(AuthContext)
    const { img, name, _id, price, availableSites, instructorName } = course;

    const selectedCourse = {
        selectedId : _id,
        studentEmail: user?.email, 
        img, name, price, availableSites, instructorName

    }

    // handle select button
    const handleSelectBtn = () => {
        fetch(`http://localhost:5000/selected-courses/${user?.email}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(selectedCourse)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    successModal('Successfully added')
                }
            })
            .catch(err => errorModal(err.message))
    }


    return (
        <div

            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer relative">
            <Link classNameName='relative' to={'/courses'}>
                <img className="rounded-t-lg h-[50%] w-full hover:scale-105" src={img} alt="" />
                <button onClick={handleSelectBtn} type="button" className="text-white bg-primary hover:bg-blue-800 px-10 py-2.5 text-center absolute top-[70%] right-[0%] text-sm font-bold">Select</button>
            </Link>
            <div className="p-5 h-[50%]">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                {/* <div classNameName='flex justify-between'>
                    <div classNameName='flex gap-2 items-center'>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                        {course.numberOfStudents}
                        <p>Students</p>
                    </div>
                    <div classNameName='flex gap-2 items-center'>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        {course.numberOfStudents}
                        <p>Ratings</p>
                    </div>
                    <div classNameName='text-2xl text-primary font-bold'>
                        ${course.price}
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default CourseCard;