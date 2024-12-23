import React from 'react';
import Banner from './Banner';
import FeaturedFood from '../Pages/FeaturedFood';
const Home = () => {
  return (
     <div className='mt-10'>
        <Banner></Banner>  
        <FeaturedFood></FeaturedFood>                                                                   
  </div>
 );
};

export default Home;