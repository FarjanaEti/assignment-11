import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const MyRequest = () => {
    const{user}=useAuth();
     
     const {isPending ,data:request}=useQuery({
        queryKey:['myRequest'],
        queryFn:async ()=>{
            const res= await fetch(`http://localhost:5000/food-request?email=${user.email}`)
           return res.json();
        }
     })
     if(isPending){
     return <span className="loading loading-dots loading-lg"></span>
     }
                           
  return (
     <div className='py-10'>
            <h2 className="text-3xl">My Food Request:{request?.length} </h2>
          <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Donar Name</th>
                            <th>Food Name</th>
                            <th>Pickup Location</th>
                            <th>Expire Date</th>
                            <th>Request date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            request?.map(food => <tr key={food._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    {food.donator.email}
                                </td>
                                <td>
                                    {food.name}
                                </td>
                                <td>
                                   {food.location}
                                </td>
                                <td>{food.expiredDateTime}</td>
                                <th>
                                    {food.requestDate}
                                    {/* <button className="btn btn-ghost btn-xs">X</button> */}
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
  );
};

export default MyRequest;