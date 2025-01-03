import React, { createContext, useContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import { app } from '../../firebase/firebase.init';

export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const authInfo = {
        user,
        loading,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;