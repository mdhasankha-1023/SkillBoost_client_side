import React from 'react';
import logo from '../../assets/logo/SKILL Boost.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (


        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="md:flex md:justify-between bg-[#252525] px-4 py-8">
                    <div className="mb-6 md:mb-0 w-[40%] flex flex-col gap-8">
                        <Link to={'/'} className="flex items-center">
                            <img src={logo} className="h-16 me-3" alt="SkillBoost Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                <span className='text-primary'>Skill</span>
                                <span className='text-secondary'>Boost</span>
                            </span>
                        </Link>
                        <ul className="text-white dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <FontAwesomeIcon className='mr-2' icon={faMapMarkerAlt}></FontAwesomeIcon>
                                East Ragarbag Kalibari, Dkhak-1214
                            </li>
                            <li>
                                <FontAwesomeIcon className='mr-2' icon={faPhone}></FontAwesomeIcon>
                                +880 1646448338
                            </li>
                            <li>
                                <FontAwesomeIcon className='mr-2' icon={faClock}></FontAwesomeIcon>
                                Sat - Thus 8.00-9.00
                            </li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 w-[60%]">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Popular course</h2>
                            <ul className="text-white dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Support</h2>
                            <ul className="text-white dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">About Us</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Registration</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Available Course</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Became a Instructor</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center bg-[#1D1D1D] py-8">
                    <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">SKILLBOOST</a>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>

    );
};

export default Footer;