import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer';

const Layout = () => {
  return (
 <div className='max-w-7xl mx-auto'>  
   <Navbar></Navbar>  
   <Outlet></Outlet>
   
    <Footer></Footer>                                                                                  
 </div>
 );
};

export default Layout;