import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllFood = () => {
   const data= useLoaderData();
   console.log(data)
     return (
    <div className="p-6 mt-5 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">Featured Foods</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-5 overflow-hidden">
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