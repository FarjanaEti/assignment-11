import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import AuthContext from '../AuthProvider/AuthContex';

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleAddFood = (e) => {
    e.preventDefault();

    // Get form data
    const foodName = e.target.foodName.value;
    const foodImage = e.target.foodImage.value;
    const foodQuantity = parseInt(e.target.foodQuantity.value);
    const pickupLocation = e.target.pickupLocation.value;
    const expiredDateTime = e.target.expiredDateTime.value;
    const additionalNotes = e.target.additionalNotes.value;

    // Validation
//     const isValid =
//       !foodImage ||
//       !foodName ||
//       foodName.length < 2 ||
//       !foodQuantity ||
//       foodQuantity <= 0 ||
//       !pickupLocation ||
//       !expiredDateTime ||
//       !additionalNotes ||
//       additionalNotes.length < 10;

//     if (isValid) {
//       return Swal.fire('Error', 'Please ensure all fields are valid.', 'error');
//     }

    // Create food object
    const newFood = {
      name: foodName,
      image: foodImage,
      quantity: foodQuantity,
      location: pickupLocation,
      expiredDateTime: expiredDateTime,
      notes: additionalNotes,
      donator: {
        image: user?.photoURL,
        name: user?.displayName,
        email: user?.email,
      },
      status: 'available', // Default status
    };
  console.log(newFood)
    setLoading(true);

    // Send request to server
     fetch('http://localhost:5000/addfood', {
       method: 'POST',
       headers: {
        'content-type': 'application/json',
       },
       body: JSON.stringify(newFood),
    })
       .then((res) => res.json())
       .then((data) => {
         if (data.insertedId) {
           Swal.fire({
             title: 'Success!',
             text: 'Food added successfully',
             icon: 'success',
             confirmButtonText: 'Ok',
           });
           e.target.reset(); // Reset form
         }
       })
       .finally(() => {
         setLoading(false);
       });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4">Add Food</h2>
      <form onSubmit={handleAddFood}>
        {/* Food Name */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Food Name</label>
          <input
            type="text"
            name="foodName"
            className="w-full p-2 border rounded"
            placeholder="Enter food name"
          />
        </div>

        {/* Food Image URL */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Food Image URL</label>
          <input
            type="text"
            name="foodImage"
            className="w-full p-2 border rounded"
            placeholder="Enter image URL"
          />
        </div>

        {/* Food Quantity */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Food Quantity</label>
          <input
            type="number"
            name="foodQuantity"
            className="w-full p-2 border rounded"
            placeholder="Enter quantity"
          />
        </div>

        {/* Pickup Location */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Pickup Location</label>
          <input
            type="text"
            name="pickupLocation"
            className="w-full p-2 border rounded"
            placeholder="Enter pickup location"
          />
        </div>

        {/* Expired Date/Time */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Expired Date/Time</label>
          <input
            type="datetime-local"
            name="expiredDateTime"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Additional Notes */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Additional Notes</label>
          <textarea
            name="additionalNotes"
            className="w-full p-2 border rounded"
            placeholder="Enter additional notes"
            rows="4"
          ></textarea>
        </div>

        {/* Donator Info */}
        <div className="mb-4">
          <img src={user?.photoURL || 'https://i.ibb.co.com/1TxrJFN/462561728-536882932418932-6619261142512956761-n.jpg'} alt={user?.displayName} className="w-12 h-12 rounded-full" />
          <p>{user?.displayName}</p>
          <p>{user?.email}</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Food'}
        </button>
      </form>
    </div>
  );
};

export default AddFood;
