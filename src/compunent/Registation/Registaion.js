import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../../Hooks/useAuth';
import './Registion.css';

const Registration = () => {
    // destrucer the value from context object
    const { handleName, handlePhoneNumber, handleEmail, handlePassword, handleRagisterSubmit, error, singInUsingGoole} = useAuth()

    return (
        <div className='Registration'>
            <div className="registration-container text-center ">
                <h5 className="text-red py-4" >Create Your Account!</h5>
                <form className="registration-form" onSubmit={handleRagisterSubmit}>
                    <input type="text" placeholder="Enter Your Name" onBlur={handleName} required />
                    <input type="email" placeholder="Enter Your Email" onBlur={handleEmail} required />
                    <input type="text" placeholder="Enter Your Phone Number" onBlur={handlePhoneNumber} required />
                    <input type="password" placeholder="Enter Your Password" onBlur={handlePassword} required />
                    <button className="registration-btn">Registration</button>
                </form>
                <p className="my-1">{error}</p>
                <Link className="login" to="/login">Already have an accoun?</Link>

                <button className="google-login" onClick={singInUsingGoole}><i className="fab fa-google"></i> Sing up with Google</button>
            </div>
        </div>
    );
};

export default Registration;