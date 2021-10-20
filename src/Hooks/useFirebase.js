import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './../Firebase/firebase.init';


initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
   
    const [error, setError] = useState("");
   
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isLoading,setIsLoading] = useState(true);
    
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    // sing in with google 
    const singInWithGoogle = () => {
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
        e.preventDefault();
        if (password.length < 6) {
            setError("Password should be more than 6 character")
        }
        console.log("reg", isLoading)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                 setUser(result.user)
                
               
                setError("")
               
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage, errorCode)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
// function for login
    const handleLoginSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch(err => {
                setError(err.message)
            })
        

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