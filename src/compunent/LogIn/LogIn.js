import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';
import './LogIn.css';

const LogIn = () => {
    // destrucer data from useAuth
    const { handleLoginSubmit, singInWithGoogle, error,setUser, setError,handlePassword,handleEmail,setIsLoading } = useAuth()

    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || "/home"
    const handleGoogleSingin = (e) => {
        e.preventDefault();
      singInWithGoogle()
            .then(result => {
                console.log(result.user)
                history.push(redirect_url)
                setError("")
            })
            .catch(error => {
                setError(error.message)

            })
            setIsLoading(false)
            
            
    }
   
 const onLogin= (e) =>{
    
    e.preventDefault();
    handleLoginSubmit()
    .then((result) => {
        history.push(redirect_url)
        setUser(result.user)
       setError("")
      
   }) 
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage, errorCode)
        })
        setIsLoading(false)
 }


    return (
        <div className='Login'>
            <div className="login-container text-center ">
                <h5 className="text-red py-4">Login Your Account!</h5>
                <hr />
                <form className="login-form" onSubmit={onLogin}>
                    <input type="email" onBlur={handleEmail} placeholder="Enter Your Email" required />
                    <input type="password" onBlur={handlePassword} placeholder="Enter Your Password" required />
                    <Button type="submit" className="w-50">Login</Button>
                </form>
                <p>{error}</p>
                <Link className="regintration" to="/registration">Create an account?</Link>
                <Button className="bg-warning text-black" onClick={handleGoogleSingin}><i className="fab fa-google"></i> Sing in with Google</Button>
            </div>
        </div>
    );
};

export default LogIn;