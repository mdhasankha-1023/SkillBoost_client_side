import React, { createContext, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();


const auth = getAuth(app);

// provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    
    // authenticate with google
    const google = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    
    const authInfo = {
        user,
        loading,
        google
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;