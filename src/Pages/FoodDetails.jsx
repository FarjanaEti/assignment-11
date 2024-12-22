import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FoodDetails = () => {
   const food=useLoaderData();
   console.log(food);   
   const handleRequestFood=()=>{
      document.getElementById("requestModal").showModal();                        
   }                        
 return (
    <div className="p-6 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-6">{food.name}</h2>
      <img src={food.image} alt={food.name} className="w-64 mx-auto h-64 mb-6 rounded" />
      <p><strong>Location:</strong> {food.location}</p>
      <p><strong>Quantity:</strong> {food.quantity}</p>
      <p><strong>Status:</strong> {food.status}</p>
      <p><strong>Expired Date:</strong> {new Date(food.expiredDateTime).toLocaleString()}</p>
      <p><strong>Donator Name:</strong> {food.donatorName}</p>
      <p><strong>Donator Email:</strong> {food.donatorEmail}</p>
      <button className="btn btn-primary mt-6" onClick={handleRequestFood}>
        Request Food
      </button>

      {/* Request Modal */}
      <dialog id="requestModal" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Request Food</h3>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <div>
              <label>Food Name:</label>
              <input
                type="text"
                value={food.name}
                className="input input-bordered w-full"
                readOnly
              />
            </div>
            <div>
              <label>Food Image:</label>
              <img src={food.image} alt={food.name} className="w-24 h-24 mx-auto" />
            </div>
            <div>
              <label>Food ID:</label>
              <input
                type="text"
                value={food._id}
                className="input input-bordered w-full"
                readOnly
              />
            </div>
            <div>
              <label>Donator Email:</label>
              <input
                type="email"
                value={food.donatorEmail}
                className="input input-bordered w-full"
                readOnly
              />
            </div>
            <div>
              <label>Donator Name:</label>
              <input
                type="text"
                value={food.donatorName}
                className="input input-bordered w-full"
                readOnly
              />
            </div>
            <div>
              <label>User Email:</label>
              <input
                type="email"
                value="user@example.com" 
                className="input input-bordered w-full"
                readOnly
              />
            </div>
            <div>
              <label>Request Date:</label>
              <input
                type="text"
                value={new Date().toLocaleString()}
                className="input input-bordered w-full"
                readOnly
              />
            </div>
            <div>
              <label>Pickup Location:</label>
              <input
                type="text"
                value={food.location}
                className="input input-bordered w-full"
                readOnly
              />
            </div>
            <div>
              <label>Expire Date:</label>
              <input
                type="text"
                value={new Date(food.expiredDateTime).toLocaleString()}
                className="input input-bordered w-full"
                readOnly
              />
            </div>
            <div>
              <label>Additional Notes:</label>
              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Add any notes here..."
              ></textarea>
            </div>
          </div>
          <div className="modal-action">
            <button
              className="btn btn-primary"
              //onClick={() => handleFoodRequest(food)}
            >
              Request Food
            </button>
            <button className="btn btn-secondary">Close</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default FoodDetails;