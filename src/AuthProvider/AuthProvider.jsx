import React, { createContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();


const auth = getAuth(app);

// provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    
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
    
    const authInfo = {
        user,
        loading,
        google,
        github
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;