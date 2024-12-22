import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../AuthProvider/AuthContex';

const Navbar = () => {
     const { user, logout } = useContext(AuthContext);   
     const handleLogout = () => {
    logout()
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch((error) => console.error("Logout Error:", error));
  };                        
   return (
     <div className="navbar bg-base-100">
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
                <li><Link to="/myfavorite">My Favorites</Link></li>
              </>
            )}
            <li><Link to="/contact">Contact Us</Link></li>
            {!user ? (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
              </>
            ) : (
              <li>
                <button onClick={handleLogout} className="btn btn-error w-full">Logout</button>
              </li>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
         Food
        </a>
      </div>

      {/* Navbar Center (Visible only on large screens) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/allFood">All Food</Link></li>
          {user && (
            <>
              <li><Link to="/addFood">Add Food</Link></li>
              <li><Link to="/myfavorite">My Favorites</Link></li>
            </>
          )}
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        {!user ? (
          <>
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/register" className="btn btn-secondary ml-2">Register</Link>
          </>
        ) : (
                              
          <div className="relative group flex items-center justify-center gap-4">
            {/* User Photo */}
            <img
              src={user.photoURL || "https://i.ibb.co.com/1TxrJFN/462561728-536882932418932-6619261142512956761-n.jpg"}
              alt="User"
              className="w-12 h-10 rounded-full border "
            />      
                <button onClick={handleLogout} className="btn  btn-error ">Logout</button>
            
          </div>
        )}
      </div>
    </div>
 );
};

export default Navbar;