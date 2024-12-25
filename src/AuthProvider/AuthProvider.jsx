import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContex';
import { auth } from '../firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import axios from 'axios';


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

 useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log('STATE CAPTURED', currentUser?.email)
    if(currentUser?.email){
      const user={email:currentUser.email}
     
      axios.post('https://assignment-number-11-server.vercel.app/jwt',user,{
         withCredentials:true
      })
      .then(res => {
         console.log('login token', res.data);
         setLoading(false);
     })
   }
   else{
      axios.post('https://assignment-number-11-server.vercel.app/logout',{},{
         withCredentials:true
      })
      .then(res=>{
         console.log(res.data)
         setLoading(false) 
      })
   }
  });

  return () => {
    unsubscribe();
  };
}, []);

 const signOutUser=()=>{
  return signOut(auth)
}
      const info={
     user,
     setUser,                         
     createUser,
     handleGoogle,
     loginUser,
     signOutUser
      }

  return (
  <AuthContext.Provider value={info}>
      {children}                                                                                 
  </AuthContext.Provider>
   );
};

export default AuthProvider;