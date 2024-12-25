import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form'; 

const AllFood = () => {
  const data= useLoaderData();
  const [ThreeColumn, setThreeColumn] = useState(true);
  const [loaderFood, setLoaderFood] = useState(data)
  const { register, handleSubmit } = useForm()
   console.log(data)

   //search
    const onSearchSubmit = (searchData) => {
      const searchQuery = searchData.search || ""; 
      console.log(searchQuery)
    if (searchQuery) {
      setLoaderFood([]); 
      fetch(`https://assignment-number-11-server.vercel.app/food?searchParam=${searchQuery}`)
        .then((res) => res.json())
        .then((data) => {
          setLoaderFood(data); 
        });
    } else {
      setLoaderFood(data); 
    }
  };
     return (
    <div className="p-6 mt-5 bg-gray-100">
      <h2 className="text-2xl font-bold text-center  mb-6">Available Foods</h2>
      <div className='flex gap-2 w-1/3 mx-auto  '>
      {/* from 3 column to 2 column*/}
      <button 
       onClick={() => setThreeColumn(!ThreeColumn)}
      className='btn btn-accent'>Change Layout</button>
       {/* search */}
       <div className="w-[400px] mx-auto mb-4">
        <form onSubmit={handleSubmit(onSearchSubmit)}>
          <input
            {...register('search')} 
            type="text"
            name="search"
            placeholder="Search"
            className="input input-bordered md:w-full ml-14 md:ml-0"
            required
          />
        </form>
      </div>
      </div>
     {/* main card here */}
      <div className={`grid ${
          ThreeColumn ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" : "grid-cols-1 sm:grid-cols-1 md:grid-cols-2"
        }  gap-6 pt-5 overflow-hidden`}>
        {loaderFood.map((food) => (
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
              <p>Expire Date: {food.expiredDateTime}</p>
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