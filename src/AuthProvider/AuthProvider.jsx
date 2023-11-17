import React, { createContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';
import Swal from 'sweetalert2';

export const AuthContext = createContext();


const auth = getAuth(app);

// provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    // success modal
    const successModal = (text) => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: `${text}`,
            showConfirmButton: false,
            timer: 1500
          });
    }

    // error modal
    const errorModal = (text) => {
        Swal.fire({
            position: "center",
            icon: "error",
            title: `${text}`,
            showConfirmButton: false,
            timer: 1500
          });
    }


    
    // authenticate with google
    const google = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // authenticate with github
    const github = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // signUp with email and password
    const signUpWithEmailAndPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn with email and password
    const logInWithEmailAndPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signOut user
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    
    const authInfo = {
        user,
        loading,
        successModal,
        errorModal,
        google,
        github,
        signUpWithEmailAndPassword,
        logInWithEmailAndPassword,
        signOutUser,
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;