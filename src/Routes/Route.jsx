import {
    createBrowserRouter,
  } from "react-router-dom";
import Other from "../Layout/Other";
import SignIn from "../Pages/Registration/SignIn/SignIn";
import SignUp from "../Pages/Registration/SignUp/SignUp";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Courses from "../Pages/Courses/Courses";
import Instructors from "../Pages/Instructors/Instructors";
import EnrolledClasses from "../Pages/DashboardPage/StudentDashboard/EnrolledClasses/EnrolledClasses";
import SelectedClasses from "../Pages/DashboardPage/StudentDashboard/SelectedClasses/SelectedClasses";
import PaymentHistory from "../Pages/DashboardPage/StudentDashboard/PaymentHistory/PaymentHistory";
import AddClass from "../Pages/DashboardPage/InstructorsDashboard/AddClass/AddClass";
import MyClasses from "../Pages/DashboardPage/InstructorsDashboard/MyClasses/MyClasses";
import ManageUsers from "../Pages/DashboardPage/AdminDashboard/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/DashboardPage/AdminDashboard/ManageClasses/ManageClasses";
import Dashboard from "../Layout/Dashboard";
import UserDashboard from "../Pages/DashboardPage/UserDashboard/UserDashboard";
import UserProfile from "../Pages/DashboardPage/UserProfile/UserProfile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>,
                loader: () => fetch('/public/teachers.json')
            }
        ]
    },
    {
        path: '/',
        element: <Other></Other>,
        children: [
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [

            // other pages
            {
                path: '/dashboard',
                element: <UserDashboard></UserDashboard>
            },
            {
                path: '/dashboard/user-profile',
                element: <UserProfile></UserProfile>
            },

            // student pages
            {
                path: '/dashboard/enrolled-classes',
                element: <EnrolledClasses></EnrolledClasses>
            },
            {
                path: '/dashboard/selected-classes',
                element: <SelectedClasses></SelectedClasses>
            },
            {
                path: '/dashboard/payment-history',
                element: <PaymentHistory></PaymentHistory>
            },

            // instructors pages
            {
                path: '/dashboard/add-class',
                element: <AddClass></AddClass>
            },
            {
                path: '/dashboard/my-classes',
                element: <MyClasses></MyClasses>
            },

            // admin pages
            {
                path: '/dashboard/manage-users',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: '/dashboard/manage-classes',
                element: <ManageClasses></ManageClasses>
            }

        ]
    }
])  

export default router;