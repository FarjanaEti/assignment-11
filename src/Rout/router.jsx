import React from 'react';
import {
  createBrowserRouter,
 } from "react-router-dom";
import Layout from '../layout/Layout';
import Home from '../Component/Home';
import LogIn from '../Pages/LogIn';
import Register from '../Pages/Register';
import AddFood from '../Pages/AddFood';
import AllFood from '../Pages/AllFood';
import FoodDetails from '../Pages/FoodDetails';
import MyRequest from '../Pages/MyRequest';
import ManageFood from '../Pages/ManageFood';
import PrivateRout from './PrivateRout';
import Error from '../Component/Error';
import Contact from '../Component/Contact';

const router = createBrowserRouter([
   {
  path: "/",
  element:<Layout></Layout>,
  errorElement:<Error></Error>,
  children:[
     {
     path:'/',
     element:<Home></Home> ,
   },
   {
    path:'/addFood',
    element:<AddFood></AddFood>,
   },
   {
    path:'/contact',
    element:<Contact></Contact>
   },
   {
      path:'/allFood',
      element:<AllFood></AllFood>,
      loader:()=>fetch('https://assignment-number-11-server.vercel.app/food')
   },
   {
      path:'/food/:id',
      element:<PrivateRout><FoodDetails></FoodDetails></PrivateRout> ,
      loader:({params})=>fetch(`https://assignment-number-11-server.vercel.app/food/${params.id}`)
   },
   {
      path:'/myRequest',
      element:<PrivateRout><MyRequest></MyRequest></PrivateRout>
   },
   {
      path:'/manageFood',
      element:<PrivateRout><ManageFood></ManageFood></PrivateRout>
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