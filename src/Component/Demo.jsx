import React from 'react';

const Demo = () => {
   return (
   <div className=' gap-3'>                          
   <div className="card bg-base-100 h-96 w-60  shadow-xl overflow-hidden group">
  {/* Image Container 1*/}
  <figure className="relative w-full h-64 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-[500px] transition-transform duration-[4000ms]  group-hover:translate-y-[-1800px]">
      <img
        className="w-full h-64 object-cover"
        src="https://i.ibb.co.com/QYQhS83/card-1.jpg"
        alt="Image 1"
      />
      <img
        className="w-full h-64 object-cover"
        src="https://i.ibb.co.com/KVgQx1R/card-8.jpg"
        alt="Image 2"
      />
      <img
        className="w-full h-64 object-cover"
        src="https://i.ibb.co.com/4ZDsSrj/card-7.jpg"
        alt="Image 3"
      />
      <img
        className="w-full h-64 object-cover"
        src="https://i.ibb.co.com/JpC003k/cardd-6.jpg"
        alt="Image 4"
      />
      <img
        className="w-full h-64 object-cover"
        src="https://i.ibb.co.com/NnCJBps/cardd-5.jpg"
        alt="Image 4"
      />
      <img
        className="w-full h-64 object-cover"
        src="https://i.ibb.co.com/cD8PJ6W/cardd-4.jpg"
        alt="Image 4"
      />
      <img
        className="w-full h-64 object-cover"
        src="https://i.ibb.co.com/5R3rw7m/card-03.jpg"
        alt="Image 4"
      />
      <img
        className="w-full h-64 object-cover"
        src="https://i.ibb.co.com/3d45dpX/food-3.jpg"
        alt="Image 4"
      />
    </div>
  </figure>
  {/* Card Body */}
  <div className="card-body items-center text-center">
    <h2 className="card-title">Demo Foods</h2>
  </div>
</div>
  {/* Image Container 2*/}
   <div className="card bg-base-100 h-96 w-60 shadow-xl overflow-hidden group">
  <figure className="relative w-full h-64 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-[500px] transition-transform duration-[4000ms] group-hover:translate-y-[-1630px]">
      {/* news 1 */}
      <div className="border card bg-base-100 h-96 w-60 shadow-xl overflow-hidden group">
    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"></div>
    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
      <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-800 dark:bg-violet-600"></a>
      <div className="flex flex-col justify-start text-center dark:text-gray-800">
        <span className="text-3xl font-semibold leading-none tracking-wide">01</span>
        <span className="leading-none uppercase">Jan</span>
      </div>
    </div>
    <h2 className="z-10 p-5">
      <a rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline dark:text-gray-800">Help Feed the Hungry: Donate Today</a>
    </h2>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Support Our Mission</h2>
      <img src="https://i.ibb.co.com/7GrqhKC/news-1.jpg" alt="" />
    </div>
  </div>
  {/* news 2 */}
  <div className="border card bg-base-100 h-96 w-60 shadow-xl overflow-hidden group">
    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"></div>
    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
      <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-800 dark:bg-violet-600">Community</a>
      <div className="flex flex-col justify-start text-center dark:text-gray-800">
        <span className="text-3xl font-semibold leading-none tracking-wide">15</span>
        <span className="leading-none uppercase">Feb</span>
      </div>
    </div>
    <h2 className="z-10 p-5">
      <a rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline dark:text-gray-800">Join Our Food Drive to Make a Difference</a>
    </h2>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Make an Impact</h2>
      <img src="https://i.ibb.co.com/Ssgr9yq/news-3.jpg" alt="" />
    </div>
  </div>
     {/* news 3 */}
     <div className="card bg-base-100 h-96 w-60 shadow-xl overflow-hidden group">
    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"></div>
    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
      <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-800 dark:bg-violet-600">Awareness</a>
      <div className="flex flex-col justify-start text-center dark:text-gray-800">
        <span className="text-3xl font-semibold leading-none tracking-wide">28</span>
        <span className="leading-none uppercase">Mar</span>
      </div>
    </div>
    <h2 className="z-10 p-5">
      <a rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline dark:text-gray-800">Raising Awareness for Food Insecurity</a>
    </h2>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Spread the Word</h2>
      <img src="https://i.ibb.co.com/Ht85syJ/news-2.jpg" alt="" />
    </div>
  </div>
  {/* news 4 */}
  <div className="card bg-base-100 h-96 w-60 shadow-xl overflow-hidden group">
    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"></div>
    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
      <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-800 dark:bg-violet-600">Charity</a>
      <div className="flex flex-col justify-start text-center dark:text-gray-800">
        <span className="text-3xl font-semibold leading-none tracking-wide">12</span>
        <span className="leading-none uppercase">Apr</span>
      </div>
    </div>
    <h2 className="z-10 p-5">
      <a rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline dark:text-gray-800">Share Your Excess Food with Those in Need</a>
    </h2>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Donate Generously</h2>
      <img src="https://i.ibb.co.com/XCFBhPX/news-4.jpg" alt="" />
    </div>
  </div>
  {/* news 5 */}
  <div className="card bg-base-100 h-96 w-60 shadow-xl overflow-hidden group">
    <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via- dark:from-gray-50 dark:to-gray-50"></div>
    <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
      <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-800 dark:bg-violet-600">Hope</a>
      <div className="flex flex-col justify-start text-center dark:text-gray-800">
        <span className="text-3xl font-semibold leading-none tracking-wide">05</span>
        <span className="leading-none uppercase">May</span>
      </div>
    </div>
    <h2 className="z-10 p-5">
      <a rel="noopener noreferrer" href="#" className="font-medium text-md hover:underline dark:text-gray-800">Together, We Can End Hunger</a>
    </h2>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Be a Part of Change</h2>
      <img src="https://i.ibb.co.com/9t9T6R3/news-5.jpg" alt="" />
    </div>
  </div>
     
    </div>
  </figure>
  {/* Card Body */}
  <div className="card-body items-center text-center">
    <h2 className="card-title">News</h2>
  </div>
</div>

 {/* Image Container 3*/}
 


</div> 
  );
};

export default Demo;