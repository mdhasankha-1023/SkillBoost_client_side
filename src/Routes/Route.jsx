import {
    createBrowserRouter,
  } from "react-router-dom";
import Other from "../Layout/Other";
import SignIn from "../Pages/Registration/SignIn/SignIn";
import SignUp from "../Pages/Registration/SignUp/SignUp";

const router = createBrowserRouter([
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