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
    }
])  

export default router;