import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useInstructorCourses = () => {
    const {user} = useContext(AuthContext);

    // start query fetch
    const { isPending, data } = useQuery({
        queryKey: ['insCourses', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/courses/${user?.email}`)
            return res.json();
        }
    })

    return [data, isPending]
};

export default useInstructorCourses;