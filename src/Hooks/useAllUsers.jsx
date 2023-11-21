import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useAllUsers = () => {

     // start query fetch
     const { isPending, data } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`)
            return res.json();
        }
    })


    return [data, isPending]
};

export default useAllUsers;