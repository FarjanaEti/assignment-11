import React from 'react';
import Banner from './Banner';
import FeaturedFood from '../Pages/FeaturedFood';
import Demo from './Demo';
import Blog from './Blog';
const Home = () => {
  return (
     <div>
        <Banner></Banner>  
        <div className='grid grid-cols-3 gap-5'>
         <div className='col-span-2'>
        <FeaturedFood></FeaturedFood>  
         </div>
         <div>
        <Demo></Demo>                                                                 
         </div>
        </div>
        <Blog></Blog>
  </div>
 );
};

export default Home;