import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Registion.css';


const Registation = () => {
    
    // destrucer the value from context object
    const {  handleEmail, handlePassword, handleRagisterSubmit, error,setUser,setIsLoading,setError, singInWithGoogle} = useAuth()
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from || "/home"

    const onRegister = (e) =>{
        e.preventDefault();
        handleRagisterSubmit()
        .then((result) => {
            history.push(redirect_url)
            setUser(result.user)
           setError("")
          
       })
       setIsLoading(false) 
    }
    
   
    return (
        <div className='Registration'>
            <div className="registration-container text-center ">
                <h5 className="text-red py-4" >Create Your Account!</h5>
                <form className="registration-form" 
                onSubmit={onRegister}>
                    
                    <input type="email" placeholder="Enter Your Email" onBlur={handleEmail} required />
                    
                    <input type="password" placeholder="Enter Your Password" onBlur={handlePassword} required />
                    <Button className="bg-secondary w-50" type="submit">Registration</Button>
                </form>
                <p className="my-1">{error}</p>
                <Link className="login" to="/login">Already have an account?</Link>

                <Button className="bg-warning text-white" onClick={singInWithGoogle}><i className="fab fa-google"></i> Sing up with Google</Button>
            </div>
        </div>
    );
};

export default Registation;