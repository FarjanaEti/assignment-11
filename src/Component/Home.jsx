import React from "react";
import Banner from "./Banner";
import FeaturedFood from "../Pages/FeaturedFood";
import Demo from "./Demo";
import Blog from "./Blog";
import Map from "./Map";
import Category from "./Category";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-2">
      {/* 🔹 Banner Section */}
      <Banner />

      {/* 🔹 Decorative Section */}
      <div className="relative -mt-16 w-full h-72 flex items-center justify-center overflow-hidden">
        <div className="absolute w-full h-14 rounded-2xl bg-[#66785F] rotate-3"></div>
        <div className="absolute w-full h-14 rounded-2xl bg-[#91AC8F] -rotate-3"></div>
        <div className="relative z-10 text-2xl text-center text-white">
          <h1>"Share and Save" <br />"Food Hub: Give & Get"</h1>
        </div>
      </div>

      {/* 🔹 Main Content Grid */}
      <div className="grid grid-cols-1  rounded-md gap-6 lg:grid-cols-4">
         {/* Category (1 Column) */}
         <div className="  lg:w-full mx-auto">
          <Category />
        </div>
        {/* FeaturedFood (3 Columns) */}
        <div className="lg:col-span-3">
          <FeaturedFood />
        </div>

      </div>

      {/* 🔹 Demo Section (Now below FeaturedFood & Category) */}
      <div className="mt-8">
        <Demo />
      </div>

      {/* 🔹 Map Section */}
      <Map />

      {/* 🔹 Blog Section */}
      <Blog />
    </div>
  );
};

export default Home;
