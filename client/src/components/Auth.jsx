import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import signinImage from '../assets/signup.jpg';

const initialState = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    AvatarURL: '',
}
const Auth = () => {
    const [form, setForm] = useState();
    const [isSignup, setIsSignup] = useState(true);
    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value});
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(form);

    }
    const switchMode = () => {
        //allows us to change the state depending on the state
        setIsSignup((prevIsSignup) => !prevIsSignup);
    }
  return (
    <div className="auth__form-container">
        <div className="auth__form-container_fields">
            <div className="auth__form-container_fields-content">
                <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
                <form onSubmit={handleSubmit}>
                    {/* full name input when signing up */}
                    {isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='fullName'>Full Name</label>
                            <input name='fullName' type="text" placeholder='Full Name' onChange={handleChange} required/>
                        </div>
                    )}
                    {/* username input for when signing up and signing in */}
                     <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='username'>Username</label>
                            <input name='username' type="text" placeholder='Username' onChange={handleChange} required/>
                        </div>
                        {/* full number for when signing up */}
                        {isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='phoneNumber'>Phone Number</label>
                            <input name='phoneNumber' type="text" placeholder='Phone Number' onChange={handleChange} required/>
                        </div>
                    )}
                    {/* Avatar Image with URL for sign up */}
                    {isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='AvatarURL'>Avatar Image URL</label>
                            <input name='AvatarURL' type="text" placeholder='Avatar URL' onChange={handleChange} required/>
                        </div>
                    )}
                    {/* Password that is used to sign up and sign in */}
                    <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='password'>Password</label>
                            <input name='password' type="password" placeholder='Password' onChange={handleChange} required/>
                    </div>

                    {isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='confirmPassword'>Confirm Password</label>
                            <input name='confirmPassword' type="password" placeholder='Confirm Password' onChange={handleChange} required/>
                        </div>
                    )}
                    <div className='auth__form-container_fields-content_button'>
                        <button>{isSignup ? "Sign Up": "Sign In"}</button>
                    </div>
                </form>
                <div className='auth__form-container_fields-account'>
                    <p>
                        {isSignup ? "Already have an account?" : "Don't have an account?" }
                        <span onClick={switchMode}>
                            {isSignup ? " Sign In" : ' Sign Up'}
                        </span>
                    </p>
                </div>
            </div>
        </div>
        <div className='auth__form-container_image'>
        <img  src={signinImage} alt= "sign in" />
        </div>
    </div>
  )
}

export default Auth