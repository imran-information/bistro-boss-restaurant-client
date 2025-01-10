import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../../firebase/firebase.init';
import useAxiosLocal from '../../hooks/useAxiosLocal';


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const axiosLocal = useAxiosLocal();


    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        return signOut(auth)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("currentUser----->", currentUser);
            if (currentUser) {
                setUser(currentUser);
                const userInfo = { email: currentUser.email }
                axiosLocal.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                            setLoading(false);
                        }
                    })
            } else {
                localStorage.removeItem('access-token')
                setUser(null)
                setLoading(false);
            }


        });

        return () => {
            unsubscribe()
        }
    }, [axiosLocal])


    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        updateUserProfile,
        googleSignIn

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;