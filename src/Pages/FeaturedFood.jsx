import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const FeaturedFood = () => {
     const[foods,setFoods]=useState([])   
     const navigate=useNavigate();                  
     useEffect(() => {
        fetch('http://localhost:5000/food')
            .then(res => res.json())
            .then(data => {
                setFoods(data);
         console.log(data)
            })
    }, [])   
    
    const handleShowAll = () => {
    navigate("/allFood"); 
  };

  return (
    <div className="p-6  bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Foods</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-24 overflow-hidden">
        {foods.map((food) => (
          <div
            key={food._id}
            className="card bg-base-100 relative shadow-xl "
          >
            <figure >
              <img
                src={food.image}
                alt={food.name}
                className=" h-48 w-48 absolute z-10  border-2 border-blue-300 rounded-full"
              />
            </figure>
            <div className="card-body text-center mt-20">
              <h2 className=" text-center">{food.name}</h2>
              <p>Location: {food.location}</p>
              <p>Quantity: {food.quantity}</p>
              <p>Status: {food.status}</p>
              <p>Expired Date/Time: {new Date(food.expiredDateTime).toLocaleString()}</p>
              <div className="card-actions justify-between inline-block">
                
                <Link to={`/food/${food._id}`}> <button
                  className="btn btn-accent" >
                  View Details
                </button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="btn btn-secondary" onClick={handleShowAll}>
          Show All
        </button>
      </div>
    </div>
  );
};

export default FeaturedFood;