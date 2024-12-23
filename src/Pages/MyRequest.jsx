import React, { useEffect, useState } from 'react';

const MyRequest = () => {
     const[request,setRequest]=useState([]) 
     console.log(request)  
        useEffect(()=>{
    fetch(`http://localhost:5000/food-request`)
    .then(res => res.json())
   .then(data => setRequest(data))                    
        },[])                      
  return (
     <div>
            <h2 className="text-3xl">My Food Request:{request.length} </h2>
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
                            <th>Pickup Location</th>
                            <th>Expire Date</th>
                            <th>Request date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            request.map(food => <tr key={food._id}>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    {food.donator.email}
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