import React from 'react';
import Banner from './Banner';
import FeaturedFood from '../Pages/FeaturedFood';
import Demo from './Demo';
import Blog from './Blog';

const Home = () => {
  return (
    <div className="max-w-7xl  mx-auto px-4 sm:px-2">
      <Banner></Banner>
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
