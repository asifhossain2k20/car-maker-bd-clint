import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { current } from 'daisyui/src/colors';
export const AuthContext=createContext()
const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider()
const AuthProvider = (props) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(false)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login=(email,password)=>{
        setLoading(false)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const googleSignIn=()=>{
        return signInWithPopup(auth,googleProvider);
    }
    const logOut=()=>{
        localStorage.removeItem('user-token')
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            return unsubscribe();
        }
    },[])
    const authInfo={
        user,
        loading,
        createUser,
        login,
        googleSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;