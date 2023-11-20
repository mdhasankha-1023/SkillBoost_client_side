import { faBook, faBookOpen, faChalkboardTeacher, faHouse, faPenToSquare, faRightFromBracket, faRightToBracket, faTachometerAlt, faUserAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Dashboard = () => {
    const { user, signOutUser, successModal, errorModal } = useContext(AuthContext);
    const navigate = useNavigate();


    // handle sign out btn
    const handleSignOUtBtn = () => {
        signOutUser()
            .then(res => {
                successModal('Sign-out successfully');
                navigate('/signIn')
            })
            .catch(err => errorModal(err.message))
    }


    // student pages
    const studentPages = <>
        <li>
            <Link to={'/dashboard/selected-classes'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FontAwesomeIcon icon={faTachometerAlt}></FontAwesomeIcon>
                <span className="ms-3">Selected Classes</span>
            </Link>
        </li>
        <li>
            <Link to={'/dashboard/enrolled-classes'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FontAwesomeIcon icon={faTachometerAlt}></FontAwesomeIcon>
                <span className="ms-3">Enrolled Classes</span>
            </Link>
        </li>
        <li>
            <Link to={'/dashboard/payment-history'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FontAwesomeIcon icon={faTachometerAlt}></FontAwesomeIcon>
                <span className="ms-3">Payment History</span>
            </Link>
        </li>
    </>

    // instructor pages
    const instructorPages = <>
        <li>
            <Link to={'/dashboard/add-class'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FontAwesomeIcon icon={faTachometerAlt}></FontAwesomeIcon>
                <span className="ms-3">Add class</span>
            </Link>
        </li>
        <li>
            <Link to={'/dashboard/my-classes'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FontAwesomeIcon icon={faTachometerAlt}></FontAwesomeIcon>
                <span className="ms-3">My classes</span>
            </Link>
        </li>
    </>

    // admin pages
    const adminPages = <>
        <li>
            <Link to={'/dashboard/manage-classes'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
                <span className="ms-3">Manage classes</span>
            </Link>
        </li>
        <li>
            <Link to={'/dashboard/manage-users'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                <span className="ms-3">Manage users</span>
            </Link>
        </li>
    </>

    // fack user
    const currentUser = 'admin';


    return (
        <div>

            <button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="separator-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">

                    {/* dashboard link */}
                    <ul className="space-y-2 font-medium">
                        
                        {/* dashboard */}
                        <li>
                            <Link to={'/dashboard'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <FontAwesomeIcon icon={faTachometerAlt}></FontAwesomeIcon>
                                <span className="ms-3">Dashboard</span>
                            </Link>
                        </li>

                        {/* dynamic pages */}

                        {/* {studentPages} */}

                        {currentUser === 'student' && studentPages}
                        {currentUser === 'instructor' && instructorPages}
                        {currentUser === 'admin' && adminPages}

                    {/* signIn, signUp and signOut btn */}
                        {!user ?
                            <>
                                {/* signIn */}
                                <li>
                                    <Link to={'/signIn'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>
                                        <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                                    </Link>
                                </li>

                                {/* signUp */}
                                <li>
                                    <Link to={'/signUp'} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
                                        <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                                    </Link>
                                </li>
                            </>
                            :
                            <>
                                {/* signOut */}
                                <li >
                                    <a onClick={handleSignOUtBtn} type='button' className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
                                        <FontAwesomeIcon icon={faRightFromBracket}></FontAwesomeIcon>
                                        <span className="flex-1 ms-3 whitespace-nowrap">Sign out</span>
                                    </a>
                                </li>
                            </>
                        }


                    </ul>

                    {/* home page link */}
                    <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                        {/* home */}
                        <li>
                            <Link to={'/'} className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                                <span className="ms-3">Home</span>
                            </Link>
                        </li>

                        {/* classes */}
                        <li>
                            <Link to={'/courses'} className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
                                <span className="ms-3">courses</span>
                            </Link>
                        </li>

                        {/* instructors */}
                        <li>
                            <Link to={'/instructors'} className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                                <FontAwesomeIcon icon={faChalkboardTeacher}></FontAwesomeIcon>
                                <span className="ms-3">Instructors</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside >

            {/* main content */}
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <Outlet></Outlet>
                </div>
            </div>

        </div >
    );
};

export default Dashboard;