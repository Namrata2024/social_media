import React from 'react';
import './navbar.css';

import {signOut} from 'firebase/auth';
import {Link} from'react-router-dom';
import { auth } from '../config/firebase';
import {useAuthState} from "react-firebase-hooks/auth"
export function Navbar() {

    const [user]=useAuthState(auth);
const signUserOut=()=>{
  signOut(auth);
}
  return (
    <div className='nav'>
<div className="nav_box">
<div className='logo'>
    <h1>
        SOCIO.
    </h1>
</div>
  
    
    
      <div className='links'>
      <Link to='/' style={{color:"white",}}>Home</Link>
     {!user && <Link to='/login'>Log In</Link>}
    {user&&   <Link to='/createpost' >Create post</Link>}
{user && (
  <div className='profile-box'>
    
  <p>{user?.displayName}</p>
        <img src={user?.photoURL || ""} alt=""style={{width:30,height:30}}/>
  <button  onClick={signUserOut}>Sign out</button>
  </div>
)}
      </div>
</div>

    </div>
  )
}


