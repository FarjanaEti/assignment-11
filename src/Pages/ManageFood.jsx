import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { p } from 'motion/react-client';

const ManageFood = () => {
    const [foods, setFoods] = useState([]);
    const { user } = useAuth();
    const [selectedFood, setSelectedFood] = useState(null);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
         if (!user?.email) {
     setError('User email is missing. Please log in.');
            return; 
        }                     
        fetch(`http://localhost:5000/food?email=${user.email}`)
            .then(res => res.json())
            .then(data => setFoods(data));
    }, [user.email]);

//     const handleDelete = (id) => {
//         if (window.confirm('Are you sure you want to delete this food?')) {
//             fetch(`http://localhost:5000/food/${id}`, {
//                 method: 'DELETE',
//             })
//                 .then(res => res.json())
//                 .then(data => {
//                     if (data.deletedCount > 0) {
//                         setFoods(foods.filter(food => food._id !== id));
//                         alert('Food deleted successfully!');
//                     }
//                 });
//         }
//     };

//     const handleUpdate = (updatedFood) => {
//         fetch(`http://localhost:5000/food/${updatedFood._id}`, {
//             method: 'PUT',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(updatedFood),
//         })
//             .then(res => res.json())
//             .then(data => {
//                 if (data.modifiedCount > 0) {
//                     setFoods(foods.map(food => (food._id === updatedFood._id ? updatedFood : food)));
//                     alert('Food updated successfully!');
//                 }
//             });
//     };

    const openUpdateModal = (food) => {
        setSelectedFood(food);
        setShowUpdateModal(true);
    };
     if (error) {
        return <div className="text-red-500 font-bold">{error}</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Manage Food</h1>
            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200 text-left">
                        <th className="border border-gray-300 px-4 py-2">Image</th>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Quantity</th>
                        <th className="border border-gray-300 px-4 py-2">Pic Up Location</th>
                        <th className="border border-gray-300 px-4 py-2">Expiry Date</th>
                        <th className="border border-gray-300 px-4 py-2">Status</th>
                        <th className="border border-gray-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {foods.map(food => (
                        <tr key={food._id} className="hover:bg-gray-100">
                            <td className="border border-gray-300 px-4 py-2">
                                <img src={food.image || 'https://via.placeholder.com/100'} alt={food.name} className="w-20 h-20 object-cover" />
                            </td>
                            <td className="border border-gray-300 px-4 py-2">{food.name}</td>
                            <td className="border border-gray-300 px-4 py-2">{food.quantity}</td>
                            <td className="border border-gray-300 px-4 py-2">{food.location}</td>
                            <td className="border border-gray-300 px-4 py-2">{new Date(food.expiredDateTime).toLocaleString()}</td>
                            <td className="border border-gray-300 px-4 py-2">{food.status}</td>
                            <td className="border border-gray-300 px-4 py-2 flex gap-2">
                                <button
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    onClick={() => openUpdateModal(food)}
                                >
                                    Update
                                </button>
                                <button
                                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                    onClick={() => handleDelete(food._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showUpdateModal && selectedFood && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Update Food</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleUpdate(selectedFood);
                                setShowUpdateModal(false);
                            }}
                        >
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    value={selectedFood.name}
                                    onChange={(e) => setSelectedFood({ ...selectedFood, name: e.target.value })}
                                    className="w-full px-4 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Quantity</label>
                                <input
                                    type="number"
                                    value={selectedFood.quantity}
                                    onChange={(e) => setSelectedFood({ ...selectedFood, quantity: e.target.value })}
                                    className="w-full px-4 py-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Location</label>
                                <input
                                    type="text"
                                    value={selectedFood.location}
                                    onChange={(e) => setSelectedFood({ ...selectedFood, location: e.target.value })}
                                    className="w-full px-4 py-2 border rounded"
                                />
                            </div>
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setShowUpdateModal(false)}
                                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageFood;
