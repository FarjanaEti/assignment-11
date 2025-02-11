import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import L from "leaflet";

// Custom Marker Icon (fixes default marker issue)
const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const Map = () => {
  const [foodRequests, setFoodRequests] = useState([]);
  const [foodLocations, setFoodLocations] = useState([]);

  // Fetch food requests from MongoDB
  useEffect(() => {
    fetch("http://localhost:5000/food-request") // Replace with your API
      .then((res) => res.json())
      .then((data) => {
        setFoodRequests(data);
        fetchLocations(data); // Convert locations to lat/lng
      })
      .catch((err) => console.error("Error fetching food requests:", err));
  }, []);

  // Function to get latitude & longitude from location name
  const fetchLocations = async (foods) => {
    const updatedLocations = await Promise.all(
      foods.map(async (food) => {
        if (!food.location) return null; // Skip if no location

        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(food.location)}`
        );
        const data = await response.json();

        if (data.length > 0) {
          return {
            ...food,
            latitude: data[0].lat,
            longitude: data[0].lon,
          };
        }
        return null;
      })
    );

    setFoodLocations(updatedLocations.filter(Boolean)); // Remove null values
  };

  return (
    <MapContainer center={[23.7509, 90.3935]} zoom={12} style={{ height: "500px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Display markers for food requests */}
      {foodLocations.map((food, index) => (
        <Marker key={index} position={[food.latitude, food.longitude]} icon={customIcon}>
          <Popup>
            <div>
              <h3>{food.name || "Food Item"}</h3>
              <img src={food.image} alt="Food" width="100" />
              <p><strong>Location:</strong> {food.location}</p>
              <p><strong>Quantity:</strong> {food.quantity}</p>
              <p><strong>Expires:</strong> {new Date(food.expiredDateTime).toLocaleString()}</p>
              <p><strong>Notes:</strong> {food.notes}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
