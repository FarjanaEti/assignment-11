import React from 'react';
import { NavLink } from 'react-router-dom';
import myImage from '../assets/error.PNG';

const Error = () => {
  return (
  <div className='text-center text-2xl font-semibold text-red-400 mt-20'>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p> 
    <NavLink to='/'>  <button className='btn btn-error mt-4'>Go to home page</button>  </NavLink>  
    <div className='text-center mx-auto w-72'>

    <img className='h-64' src={myImage} alt="Description of the image" />                                                                                
    </div>
</div>
  )
};

export default Error;

//3. Testimonials & Success Stories
//2. Real-Time Food Map / Latest Shared Meals 📍🍽
// Show a live feed or map of recently shared meals in different locations.
// Could be interactive, letting users see available food near them.
// Encourages participation by showing an active community.

// 2. Sales Promotion (Special Campaigns / Featured Donations) 🎉
// Since it’s a food-sharing platform, replace "sales" with "Special Drives" or "Featured Giveaways."
// Highlight big donations, festival food drives, or community events where lots of food is available.
// Add a countdown timer for limited-time events to create excitement.
// 3. Categories (Food Types or Availability) 🍕🥗🥘
// Organize shared meals into categories like:
// Home-Cooked Meals
// Restaurant Leftovers
// Bakery & Pastries
// Fruits & Vegetables
// This helps users quickly find what they need based on preferences or dietary requirements.