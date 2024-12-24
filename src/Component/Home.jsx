import React from 'react';
import Banner from './Banner';
import FeaturedFood from '../Pages/FeaturedFood';
import Demo from './Demo';
const Home = () => {
  return (
     <div>
        <Banner></Banner>  
        <div className='grid grid-cols-3 gap-5'>
         <div className='col-span-2'>

        <FeaturedFood></FeaturedFood>  
         </div>
        <Demo></Demo>                                                                 
        </div>
  </div>
 );
};

export default Home;