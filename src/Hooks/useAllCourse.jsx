import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useAllCourse = () => {

    // start query fetch
    const { isPending, isError, data, error } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/courses`)
            return res.json();
        }
    })


    return [data, isPending]
};

export default useAllCourse;