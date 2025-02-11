import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);

  // Fetch JSON Data
  useEffect(() => {
    fetch("/categories.json") // Replace with actual API or local file
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="   h-[500px] border rounded-md bg-slate-100">
      <div className="text-center  flex flex-col my-4 px-8 space-y-4">
        {categories.map((category) => (
          <NavLink
            key={category.id} 
            to={`/category/${category.name}`}
            className="btn btn-outline btn-secondary text-start"
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Category;
