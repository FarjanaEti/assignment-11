import React, { useEffect, useState } from 'react';

const MyRequest = () => {
     const[request,setRequest]=useState([])   
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
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    
                </table>
            </div>
        </div>
  );
};

export default MyRequest;