import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../AuthProvider/AuthContex';
import { GiFoodTruck } from 'react-icons/gi';
import { motion } from "motion/react"
import { easeOut } from 'motion';

const Navbar = () => {
     const { user, signOutUser } = useContext(AuthContext);  
    
   return (
     <div className="navbar bg-zinc-900 py-10 rounded-3xl bg-transparent sticky top-0 z-50 shadow-sm">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/allFood">All Foods</Link></li>
            {user && (
              <>
                <li><Link to="/addFood">Add Movie</Link></li>
                <li><Link to="/myRequest">My Food Request</Link></li>
                <li><Link to="/manageFood">Manage Food</Link></li>
              </>
            )}
            
            {!user ? (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Signup
                </Link></li>
              </>
            ) : (
              <li>   
              </li>
            )}
          </ul>
        </div>
        <a className="btn hidden  lg:block btn-ghost text-xl  mb-6">
        <div className='flex space-x-5'>
          <motion.h1 animate={{ x: 20 }}
        transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }}>
         <GiFoodTruck className='text-blue-700 text-7xl'></GiFoodTruck>
          </motion.h1>
        
         <div > <p>-----The-----</p>
          <motion.h1 animate={{ color: ['#ecff33', '#33ffe3', '#ff6133'] }}
           transition={{ duration: 1.5, repeat: Infinity }}>Food Sharing </motion.h1>
          <p>---- Project ----</p></div>
         </div>
        </a>
      </div>

      {/* Navbar Center (Visible only on large screens) */}
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/allFood">All Food</Link></li>
          {user && (
            <>
              <li><Link to="/addFood">Add Food</Link></li>
              <li><Link to="/myRequest">My Food Request</Link></li>
              <li><Link to="/manageFood">Manage Food</Link></li>
            </>
          )}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {!user ? (
          <>
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/register" className="btn bg-[#91AC8F] text-black ml-2">Signup
            </Link>
          </>
        ) : (
                              
          <div className="relative group flex items-center justify-center gap-4">
            {/* User Photo */}
            <img
              src={user.photoURL || "https://i.ibb.co.com/1TxrJFN/462561728-536882932418932-6619261142512956761-n.jpg"}
              alt="User"
              className="w-12 h-10 rounded-full border "
            />      
                <button onClick={signOutUser} className="btn  btn-error ">Logout</button>
            
          </div>
        )}
      </div>
    </div>
 );
};

export default Navbar;