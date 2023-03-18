import React from 'react'
import './login.css'
import {auth ,provider} from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';
export function Login() {
    const navigate=useNavigate();
    const signInWithGoogle=async()=>{
       const result = await signInWithPopup(auth,provider);
    console.log(result);
    navigate('/');
    
    }
  return (
    <div className='login_box'>
      <h1>Login</h1>
      
      <div className='google_box'>
        <img src={require('../assets/img/google.webp') }alt="" />
        <button onClick={signInWithGoogle}>sign in with google</button></div>
      
    </div>
  )
}


