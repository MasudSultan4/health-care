import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Registion.css';


const Registration = () => {
    // destrucer the value from context object
    const { handleName, handlePhoneNumber, handleEmail, handlePassword, handleRagisterSubmit, error, singInWithGoogle} = useAuth()

    return (
        <div className='Registration'>
            <div className="registration-container text-center ">
                <h5 className="text-red py-4" >Create Your Account!</h5>
                <form className="registration-form" 
                onSubmit={handleRagisterSubmit}>
                    <input type="text" placeholder="Enter Your Name" onBlur={handleName} required />
                    <input type="email" placeholder="Enter Your Email" onBlur={handleEmail} required />
                    <input type="text" placeholder="Enter Your Phone Number" onBlur={handlePhoneNumber} required />
                    <input type="password" placeholder="Enter Your Password" onBlur={handlePassword} required />
                    <Button className="bg-secondary w-50">Registration</Button>
                </form>
                <p className="my-1">{error}</p>
                <Link className="login" to="/login">Already have an account?</Link>

                <Button className="bg-warning text-white" onClick={singInWithGoogle}><i className="fab fa-google"></i> Sing up with Google</Button>
            </div>
        </div>
    );
};

export default Registration;