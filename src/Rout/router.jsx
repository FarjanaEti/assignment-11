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

const router = createBrowserRouter([
   {
  path: "/",
  element:<Layout></Layout>,
  errorElement: <h2>Error page</h2>,
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
      path:'/allFood',
      element:<AllFood></AllFood>,
      loader:()=>fetch('http://localhost:5000/food')
   },
   {
      path:'/food/:id',
      element:<FoodDetails></FoodDetails>,
      loader:({params})=>fetch(`http://localhost:5000/food/${params.id}`)
   },
   {
      path:'/myRequest',
      element:<MyRequest></MyRequest>
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