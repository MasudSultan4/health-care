import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
// import { useHistory, useLocation } from 'react-router-dom';
import initializeAuthentication from './../Firebase/firebase.init';


initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isLoading,setIsLoading] = useState(true);
    

   /*  const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || "/home"; */
    
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    // sing in with google 
    const singInWithGoogle = () => {
        setIsLoading(true)
       return signInWithPopup(auth, googleProvider)  
    }
    
    // function for set email in state
    const handleEmail = e => {
        console.log(e.target.value);
        setEmail(e.target.value)
    }

    // function for set password in state
    const handlePassword = e => {
        setPassword(e.target.value)
    }

   // Function for registration
    const handleRagisterSubmit = e => {
        
        // history.push(redirect_url)
        if (password.length < 6) {
            setError("Password should be more than 6 character")
        }
        console.log("reg", isLoading)
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }
// function for login
    const handleLoginSubmit = () => {
       
        // history.push(redirect_url)
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }




    
    // observ user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe;
    }, [])

    // Function for logOut
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(result => { setUser({}) })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        error,
        singInWithGoogle,
        setError,
        setUser,
        isLoading,
        setIsLoading,
        handleLoginSubmit,
        handleRagisterSubmit,
        handlePassword,
        handleEmail,
        logOut

    }
};

export default useFirebase;