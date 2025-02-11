import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const FeaturedFood = () => {
     const[foods,setFoods]=useState([])   
     const navigate=useNavigate();                  
     useEffect(() => {
        fetch('https://assignment-number-11-server.vercel.app/food')
            .then(res => res.json())
            .then(data => {
        const sortedByQuantity = [...data].sort((a, b) => b.quantity - a.quantity);
        setFoods(sortedByQuantity.slice(0, 6));
               
         console.log(data)
            })
    }, [])   
    
    const handleShowAll = () => {
    navigate("/allFood"); 
  };

  return (
    <div className="p-6 rounded-md bg-gray-100">
  <h2 className="text-3xl font-bold text-center mb-6">Featured Foods</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 pt-24">
    {foods.map((food) => (
      <div key={food._id} className="card bg-base-100 shadow-xl relative">
        <figure className="flex justify-center mt-[-50px]">
          <img
            src={food.image}
            alt={food.name}
            className="h-40 w-40 border-2 border-blue-300 rounded-full"
          />
        </figure>
        <div className="card-body text-center mt-2">
          <h2 className="text-lg font-bold">{food.name}</h2>
          <p>Location: {food.location}</p>
          <p>Quantity: {food.quantity}</p>
          <p>Status: {food.status}</p>
          <p>Expired Date/Time: {new Date(food.expiredDateTime).toLocaleString()}</p>
          <div className="card-actions justify-center">
            <Link to={`/food/${food._id}`}>
              <button className="btn btn-accent">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
  <div className="text-center mt-6">
    <button className="btn text-black bg-[#91AC8F]" onClick={handleShowAll}>
      Show All
    </button>
  </div>
</div>

  );
};

export default FeaturedFood;