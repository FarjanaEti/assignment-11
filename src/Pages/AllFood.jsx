import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllFood = () => {
  const [ThreeColumn, setThreeColumn] = useState(true);
  
   const data= useLoaderData();
   console.log(data)
     return (
    <div className="p-6 mt-5 bg-gray-100">
      <div className='flex gap-5  justify-center'>
      <h2 className="text-2xl font-bold  mb-6">Available Foods</h2>
      <button 
       onClick={() => setThreeColumn(!ThreeColumn)}
      className='btn btn-accent'>Change Layout</button>
      </div>
      <div className={`grid ${
          ThreeColumn ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" : "grid-cols-1 sm:grid-cols-1 md:grid-cols-2"
        }  gap-6 pt-5 overflow-hidden`}>
        {data.map((food) => (
          <div
            key={food._id}
            className="card bg-white shadow-md rounded-lg overflow-hidden"
          >
            <figure >
              <img
                src={food.image}
                alt={food.name}
                className=" w-full h-56 object-cover  "
              />
            </figure>
            <div className="card-body text-center">
              <h2 className=" text-center">{food.name}</h2>
              <p>Location: {food.location}</p>
              <p>Quantity: {food.quantity}</p>
              <p>Status: {food.status}</p>
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
    </div>
  );
 
};

export default AllFood;