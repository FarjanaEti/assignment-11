import React, { useState } from 'react';
import AuthContext from './AuthContex';
import { auth } from '../firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';


const AuthProvider = ({children}) => {
 const [loading, setLoading]=useState(true)
 const [user,setUser]=useState(null)
 const googleProvider=new GoogleAuthProvider;

  const createUser = (email, password) => {
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password);
    }
  
    const handleGoogle=()=>{
  return signInWithPopup(auth,googleProvider)
 } 
 const loginUser=(email,password)=>{
  setLoading(true)
 return signInWithEmailAndPassword(auth,email,password)                    
 }
      const info={
     user,
     setUser,                         
     createUser,
     handleGoogle,
     loginUser,
      }

  return (
  <AuthContext.Provider value={info}>
      {children}                                                                                 
  </AuthContext.Provider>
   );
};

export default AuthProvider;