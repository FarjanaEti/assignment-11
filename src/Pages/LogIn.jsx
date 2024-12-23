import React, { useContext, useRef } from 'react';
import { useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from '../AuthProvider/AuthContex';
import lotiieLogin from '../assets/Animation - 1733900171268.json'
import Lottie from 'lottie-react';


const LogIn = () => {
    const { loginUser,setUser,handleGoogle }=useContext(AuthContext)                        
  const [error,setError]=useState({});
  const [showPassword,setShowPassword]=useState(false) 
  const location=useLocation();
  const navigate=useNavigate();
  const emailRef=useRef();  
  
  //user login
     const handleSubmit=(e)=>{
      e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.pass.value;
   
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user)
        setUser(user);
        toast.success('Login successful')
        const from = location.state?.from?.pathname || '/'; 
        navigate('/');
      })
      .catch((err) => {
       setError({ ...error, login: err.code });
       toast.error(errorMessage);
      });
     } 
     //login with google
     const handleGoogleLogIn=()=>{
      handleGoogle()
    .then((res) => {
      const user = res.user;
      console.log(user)
      setUser(user);
      toast.success(`Welcome, ${user.displayName}!`);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    })
    .catch((err) => {
      toast.error(`Google Login failed: ${err.message}`);
    });  
     }                        
   return (
   <div className='flex gap-3 items-center justify-center min-h-screen'>
    <div className="text-center lg:text-left w-96">
    <Lottie animationData={lotiieLogin}></Lottie>
    </div>
     <div className="card items-center bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
         <p className='font-semibold text-2xl my-3'>LogIn Here</p>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" ref={emailRef} name='email' placeholder="email" className="input input-bordered" required />
          <ToastContainer position="top-right" autoClose={3000}></ToastContainer> 
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPassword ? 'text' : 'password'} name='pass' 
          placeholder="password" 
          className="input input-bordered" required />
          {/* eys */}
          <button
       onClick={()=>setShowPassword(!showPassword)}
       className='btn btn-xs absolute right-3 top-12'>
        {
          showPassword ?<FaEye></FaEye> :<FaEyeSlash></FaEyeSlash>
        }
        </button>
           {error.login && (
              <label className="label text-sm text-red-600">
                {error.login}
              </label>
            )} 
          <label className="label">
            <Link  to="/auth/forgot-password"
    state={{ email: emailRef.current?.value || '' }} 
    className="label-text-alt link link-hover">            
              Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6 gap-3">
          <button className="btn btn-success">Login</button>
          <button onClick={handleGoogleLogIn} className='btn btn-success'><FaGoogle className='text-blue-800'></FaGoogle> LogIn With Google</button>
        </div>
        <p>Don't have an account's? <Link className='text-lime-700' to='/register'>Register</Link></p>
      </form>
    </div>                         
  </div>
 );
};

export default LogIn;