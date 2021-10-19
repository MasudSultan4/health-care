import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './../Firebase/firebase.init';


initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
   const [displayName,setDisplayName] = useState("")
    const [error, setError] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("")
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isLogin,setIsLogin] = useState(true);
    
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    // sing in with google 
    const singInWithGoogle = () => {
       return signInWithPopup(auth, googleProvider)  
    }


    // log out 
    const logOut = () => {
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }

   
    // display Name 
    const handleName = e => {
        setDisplayName(e.target.value)
    }
    // Phone Number 
    const handlePhoneNumber = e => {
        setPhoneNumber(e.target.value)
    }
    // Email User 
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };

    //   password Change 
      const handlePasswordChange = (e) => {
        if (e.target.value.length < 6) {
          return;
        } else {
          setPassword(e.target.value);
        }
      };

       // register email password 
       // Function for registration
    const handleRagisterSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError("Password should be more than 6 character")
        }
        // console.log("reg", isLogin)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const userInfo = result.user
                setUser(userInfo)
                setError("")
                if (userInfo) {
                    userInfo.displayName = displayName;
                    userInfo.phoneNumber = phoneNumber;
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage, errorCode)
            })
            
    }
// function for login
    const handleLoginSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const userInfo = result.user;
                console.log(userInfo)
            })
            .catch(err => {
                setError(err.message)
            })
        setError("")

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
        setError,
        isLogin,
        setIsLogin,
        handleLoginSubmit,
        handleRagisterSubmit,
        handlePasswordChange,
        handleName,
        handlePhoneNumber,
        handleEmailChange,
        logOut

    }
};

export default useFirebase;