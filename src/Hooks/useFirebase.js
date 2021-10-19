import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './../Firebase/firebase.init';


initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    // sing in with google 
    const singInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // log out 
    const logOut = () => {
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }

    // sing in with email and password 
    const singInWithEmailAndPassword = () =>{
        createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        onAuthStateChanged(auth,user => {
            if(user){
                setUser(user)
            }
        })
    },[]);


    return {
        user,
        error,
        singInWithGoogle,
        logOut

    }
};

export default useFirebase;