import React, { useContext, useState } from 'react';
import logo from '../../assets/logo/SKILL Boost.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const {user, signOutUser, successModal,
        errorModal,} = useContext(AuthContext);
    const [avatar, setAvatar] = useState(false);
    const [barClick, setBarClick] = useState(false);
    const navigate = useNavigate();
    // console.log(user);

    // handle signOut btn
    const handleSignOutBtn = () => {
        signOutUser()
        .then(res => {
            successModal('Sign-out successfully')
            navigate('/signIn')
        })
        .catch(err => errorModal(err.message))
    }

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-16" alt="SkillBoost Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        <span className='text-primary'>Skill</span>
                        <span className='text-secondary'>Boost</span>
                    </span>
                </Link>
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse relative">
                    {!user ?
                        <div>
                            <Link to={'/signIn'}>
                                <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-secondary  bg-white border border-secondary hover:bg-secondary hover:text-white ">Sign In</button>
                            </Link>
                            <Link to={'/signUp'}>
                                <button type="button" class="text-white bg-primary hover:bg-secondary  font-medium text-sm px-5 py-2.5 me-2 mb-2">Sign Up</button>
                            </Link>
                        </div>
                        :
                        <>
                            <button onClick={() => setAvatar(!avatar)} type="button" className="lg:flex hidden text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" data-dropdown-toggle="user-dropdown"
                                data-dropdown-placement="bottom">
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full" src={user?.photoURL} alt="user photo" />
                            </button>
                            {/* <!-- Dropdown menu --> */}
                            <div className={avatar ? 'absolute top-[80%] right-[5%] z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600'
                                :
                                'hidden'}>
                                <div className="px-4 py-3">
                                    <span className="block text-sm text-gray-900 dark:text-white">{user?.displayName}</span>
                                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user?.email}</span>
                                </div>
                                <ul className="py-2" aria-labelledby="user-menu-button">
                                    <li>
                                        <Link to={'/dashboard/user-profile'}  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</Link>
                                    </li>
                                    <li>
                                        <Link to={'/dashboard'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</Link>
                                    </li>
                                    <li>
                                        <a onClick={handleSignOutBtn} type='button' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer">Sign out</a>
                                    </li>
                                </ul>
                            </div>
                        </>
                    }
                    <button onClick={() => setBarClick(!barClick)} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" >
                        <span className="sr-only">Open main menu</span>
                        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                    </button>
                </div>

                {/* navlink */}
                <div className={barClick ? 'items-center justify-between  w-full md:flex md:w-auto md:order-1' : 'items-center justify-between  w-full lg:flex hidden md:w-auto lg:order-1'}>
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to={'/'} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to={'/instructors'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Instructors</Link>
                        </li>
                        <li>
                            <Link to={'/courses'} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Courses</Link>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

};

export default Header;