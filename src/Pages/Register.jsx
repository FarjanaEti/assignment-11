import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import AuthContext from '../AuthProvider/AuthContex';
import lottiAnimaton from '../assets/Animation - 1733851369003.json'
import Lottie from 'lottie-react';

const Register = () => {
    const {createUser,handleGoogle}=useContext(AuthContext)                          
   const [error,setError]=useState({});
   const navigate=useNavigate();

   //password validation
  const validatePassword = (password) => {
    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length < 6) {
      return 'Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long';
    }
     return null; 
   };
    //create a new user
    const handleSubmit= (e)=>{                      
      e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("url");
    const password = form.get("pass");

     const passwordError = validatePassword(password);
    if (passwordError) {
        setError({ ...error, password: passwordError });
       Swal.fire(passwordError);
       return; 
     }

     createUser(email,password)
        .then(res=>{ 
             toast.success('Registration successful') 
             setTimeout(() => {
              navigate('/login');
            }, 2000);               
        })
        .catch(err=>{
           console.log(err)    
           Swal.fire(`Registration failed: ${err.message}`)               
        })                    
};

    const handleGoogleLogin=()=>{
      handleGoogle()
    .then((res) => {
      // const user = res.user;
      toast.success(`Welcome!`);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    })
    .catch((err) => {
      console.log(err)
      toast.error(`Google Login failed: ${err.message}`);
    });               
  }
                            
 return (
  <div className='flex items-center justify-center min-h-screen'>
     <div className="text-center lg:text-left w-96">
    <Lottie animationData={lottiAnimaton}></Lottie>
    </div>
     <div className="card items-center bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
         <p className='font-semibold text-2xl my-3'>Register Here</p>
         <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" name='name' placeholder="Your name" className="input input-bordered"  />
        </div>
        

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" name='url' placeholder="Photo url" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
           <ToastContainer position="top-right" autoClose={3000} /> 
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='pass' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6 gap-3">
          <button className="btn btn-success">Signup
          </button>
          <button onClick={handleGoogleLogin} className="btn btn-success"><FaGoogle></FaGoogle> Register With Google</button>
        </div>
        <p>Already have n account's? <Link className='text-lime-700 underline' to='/login'>Login</Link></p>
      </form>
    </div>                         
  </div>
 );
};

export default Register;