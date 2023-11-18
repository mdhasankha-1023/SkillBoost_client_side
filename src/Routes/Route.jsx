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
import Dashboard from "../Layout/DashBoard";
import EnrolledClasses from "../Pages/DashboardPage/StudentDashboard/EnrolledClasses/EnrolledClasses";
import SelectedClasses from "../Pages/DashboardPage/StudentDashboard/SelectedClasses/SelectedClasses";
import PaymentHistory from "../Pages/DashboardPage/StudentDashboard/PaymentHistory/PaymentHistory";
import AddClass from "../Pages/DashboardPage/InstructorsDashboard/AddClass/AddClass";
import MyClasses from "../Pages/DashboardPage/InstructorsDashboard/MyClasses/MyClasses";
import ManageUsers from "../Pages/DashboardPage/AdminDashboard/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/DashboardPage/AdminDashboard/ManageClasses/ManageClasses";

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
                element: <Courses></Courses>
            },
            {
                path: '/instructors',
                element: <Instructors></Instructors>
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

            // student pages
            {
                path: '/enrolled-classes',
                element: <EnrolledClasses></EnrolledClasses>
            },
            {
                path: '/selected-classes',
                element: <SelectedClasses></SelectedClasses>
            },
            {
                path: '/payment-history',
                element: <PaymentHistory></PaymentHistory>
            },

            // instructors pages
            {
                path: '/add-class',
                element: <AddClass></AddClass>
            },
            {
                path: '/my-classes',
                element: <MyClasses></MyClasses>
            },

            // admin pages
            {
                path: '/manage-users',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: '/manage-classes',
                element: <ManageClasses></ManageClasses>
            }

        ]
    }
])  

export default router;