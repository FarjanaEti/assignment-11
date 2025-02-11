import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);

  
  useEffect(() => {
    fetch("/categories.json") 
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="   h-[500px] border rounded-md bg-[#91AC8F]">
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
