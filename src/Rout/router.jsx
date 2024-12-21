import React from 'react';
import {
  createBrowserRouter,
 } from "react-router-dom";
import Layout from '../layout/Layout';
import Home from '../Component/Home';
import LogIn from '../Pages/LogIn';
import Register from '../Pages/Register';

const router = createBrowserRouter([
   {
  path: "/",
  element:<Layout></Layout>,
  errorElement: <h2>Error page</h2>,
  children:[
     {
     path:'/',
     element:<Home></Home>              
   },
   {
  path:'/login',
   element:<LogIn></LogIn>
  },
  {
   path:'/register',
   element:<Register></Register>
  }
]
   }
])

export default router;