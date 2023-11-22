import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import PrimaryTitle from '../../../../Components/PrimaryTitle/PrimaryTitle';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';

const apiKey = '26c6dcfebf6877dd7cb99ac627f75188';

const AddClass = () => {
    const { user, successModal, errorModal } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();

    const onSubmit = (data) => {
        const { name, email, className, courseDetails, price, availableSites } = data;
        const formData = new FormData();
        formData.append('image', data.classImg[0])


        fetch('https://api.imgbb.com/1/upload?key=26c6dcfebf6877dd7cb99ac627f75188', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // COURSE INFO
                const course = {
                    instructorName: name,
                    instructorEmail: email,
                    name: className,
                    img: data.data.display_url,
                    price: price,
                    availableSites: availableSites,
                    numberOfStudents: 0,
                    ratings: 0,
                    details: courseDetails,
                    status: 'pending'
                }

                if (data.success) {
                    fetch('http://localhost:5000/courses', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(course)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.insertedId) {
                                successModal('Course added successfully')
                                reset();
                            }
                        })
                        .catch(err => errorModal(err.message))
                }
            })
            .catch(err => errorModal(err.message))

    }


    return (
        <div>
            <div className='w-full bg-white my-8'>
                <PrimaryTitle text={'ADD A Class'}></PrimaryTitle>
                <div className='w-full'>
                    <form className='flex flex-col justify-center items-center gap-8 p-8' onSubmit={handleSubmit(onSubmit)}>
                        {/* first label */}
                        <div className='flex items-center gap-8 w-full'>
                            {/* full name */}
                            <div className='w-1/2'>
                                <label for="name" class="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Name</label>
                                <input type='text' className="w-full outline-none border-b border-gray-300 text-gray-900 text-lg block p-2.5" {...register("name")} defaultValue={user?.displayName} readOnly />
                            </div>
                            {/* email */}
                            <div className='w-1/2'>
                                <label for="email" class="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Email</label>
                                <input type='email' className="w-full outline-none border-b border-gray-300 text-gray-900 text-lg block p-2.5" {...register("email")} defaultValue={user?.email} readOnly />
                            </div>
                        </div>
                        {/* second label */}
                        <div className='flex items-center gap-8 w-full'>
                            {/* class name */}
                            <div className='w-1/2'>
                                <label for="className" class="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Class name</label>
                                <input type='text' className="w-full outline-none border-b border-gray-300 text-gray-900 text-lg block p-2.5" {...register("className", { required: 'This filed is required' })} />
                                {errors.className && <p role="alert" className='text-red-500 font-bold mt-2 text-md'>{errors.className.message}</p>}
                            </div>
                            {/* class img */}
                            <div className='w-1/2'>
                                <label for="classImg" class="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Class img</label>
                                <input type='file' className="w-full outline-none border border-gray-300 text-gray-900 text-lg block" {...register("classImg", { required: 'This filed is required' })} />
                                {errors.classImg && <p className='text-red-500 font-bold mt-2 text-md'>{errors.classImg.message}</p>}

                            </div>
                        </div>

                        {/* label three */}
                        <div className='flex items-center gap-8 w-full'>
                            {/* price */}
                            <div className='w-1/2'>
                                <label for="price" class="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Price</label>
                                <input type='number' min={0} className="w-full outline-none border-b border-gray-300 text-gray-900 text-lg block p-2.5" {...register("price")} defaultValue={0} />
                            </div>
                            {/* available sites */}
                            <div className='w-1/2'>
                                <label for="availableSites" class="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Available sites</label>
                                <input type='number' min={0} className="w-full outline-none border-b border-gray-300 text-gray-900 text-lg block p-2.5" {...register("availableSites")} defaultValue={0} />
                            </div>
                        </div>
                        <div className='w-full'>
                        {/* details */}
                            <label for="message" class="block mb-2 text-lg font-bold text-gray-900 dark:text-white">Course details</label>
                            <textarea rows="4" class="w-full outline-none border-b border-gray-300 text-gray-900 text-lg block p-2.5" {...register("courseDetails", { required: 'This filed is required' })} placeholder="Write course details..."></textarea>
                            {errors.courseDetails && <p className='text-red-500 font-bold mt-2 text-md'>{errors.courseDetails.message}</p>}
                        </div>


                        {/* button */}
                        <button type="submit" className="cursor-pointer text-white bg-primary hover:bg-secondary font-medium text-xl w-full sm:w-auto px-10  py-5 text-center ">
                            ADD
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddClass;