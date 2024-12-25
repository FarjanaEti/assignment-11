import React from 'react';
import Banner from './Banner';
import FeaturedFood from '../Pages/FeaturedFood';
import Demo from './Demo';
import Blog from './Blog';

const Home = () => {
  return (
    <div className="max-w-7xl  mx-auto px-4 sm:px-2">
      <Banner></Banner>
      <div className='relative -mt-16 w-full h-72 flex items-center justify-center overflow-hidden'>
        <div className='absolute w-full h-14 rounded-2xl bg-[#66785F] rotate-3'></div>
        <div className='absolute w-full h-14 rounded-2xl bg-[#91AC8F] -rotate-3'></div>

        <div className='relative z-10 text-2xl text-center text-white'>
        <h1>"Share and Save" <br />"Food Hub: Give & Get"</h1>
       
        </div>
      </div>
      <div className="grid  grid-cols-1 px-3 gap-2 lg:grid-cols-4 ">
        <div className="md:col-span-3">
          <FeaturedFood></FeaturedFood>
        </div>
        <div className='xl:ml-8  lg:w-full mx-auto'>
          <Demo></Demo>
        </div>
      </div>
      <Blog></Blog>
      
    </div>
  );
};

export default Home;
