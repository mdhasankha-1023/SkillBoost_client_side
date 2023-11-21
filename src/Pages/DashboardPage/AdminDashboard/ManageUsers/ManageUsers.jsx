import React from 'react';
import PrimaryTitle from '../../../../Components/PrimaryTitle/PrimaryTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useAllUsers from '../../../../Hooks/useAllUsers';

const ManageUsers = () => {
    const [data, isPending] = useAllUsers();

    if(isPending){
        return <p clasName='text-lg'>Loading...</p>
    }


    return (
        <div>
            <PrimaryTitle text={'Manage Users'}></PrimaryTitle>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex justify-center pb-4 bg-white">
                    <label for="table-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        </div>
                        <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
                    </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">

                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Position
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { data.map(user =>  <tr 
                        key={user._id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src={user.picture} alt="Jese image" />

                            </th>
                            <td className="px-6 py-4">
                                <div className="ps-3">
                                    <div className="text-base font-semibold">{user.name}</div>
                                    <div className="font-normal text-gray-500">{user.email}</div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                {user.role}
                            </td>
                        </tr>)

                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageUsers;