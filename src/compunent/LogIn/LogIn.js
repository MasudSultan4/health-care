import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';
import './LogIn.css';

const LogIn = () => {
    // destrucer data from useAuth
    const { handleLoginSubmit, singInWithGoogle, error, setError,handlePassword,handleEmail } = useAuth()

    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || "/home"
    const handleGoogleSingin = () => {
      singInWithGoogle()
            .then(result => {
                console.log(result.user)
                history.push(redirect_url)
                setError("")
            })
            .catch(error => {
                setError(error.message)

            })
    }



    return (
        <div className='Login'>
            <div className="login-container text-center ">
                <h5 className="text-red py-4">Login Your Account!</h5>
                <hr />
                <form className="login-form" onSubmit={handleLoginSubmit}>
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