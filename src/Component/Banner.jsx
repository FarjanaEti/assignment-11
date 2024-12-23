import React, { useState, useEffect } from "react";
import { easeOut, motion } from "framer-motion";
import lottiAnimaton from '../assets/Animation - 1734981666471.json'
import Lottie from 'lottie-react';
const Banner = () => {
   const images = [
    "https://i.ibb.co.com/VxVbBz6/bn-3.jpg",
    "https://i.ibb.co.com/c6P36Rx/bn-4.jpg",
    "https://i.ibb.co.com/TWzCxfV/bn-5.jpg",
    "https://i.ibb.co.com/ys2h2JW/bn-2.jpg",
    "https://i.ibb.co.com/rmf4f6H/bn-1.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <>
    <div className="relative h-[500px] overflow-hidden rounded-box ">
      <div
        className="absolute inset-0 flex flex-col transition-transform duration-1000"
        style={{
          transform: `translateY(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-[500px] w-full"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="object-cover h-full w-full"
            />
          </div>
        ))}
      </div>

    <motion.div
      initial={{ x: "100%" }} 
      animate={{ x: "-100%" }}  
    transition={{ duration: 20, delay: 1, ease: easeOut, repeat: Infinity }}
    className="text-3xl text-white font-bold "
    >Sharing Excess is connecting those who have extra food with those who need more
      </motion.div> 
  </div>
  <div className="relative  p-3 w-1/3 mx-auto -top-24 rounded-lg bg-white bg-opacity-50">
  
  <div className=" rounded-md bg-emerald-100 p-5 ">
  <Lottie className="absolute -left-14 -top-10 w-24 h-24" animationData={lottiAnimaton}></Lottie>
   <p> <span className="text-xl font-semibold">What are the main goals of our project?</span>
 Food Sharing project was seeking to understand contemporary food sharing and particularly sharing beyond familial settings, so beyond the family. We were particularly interested in its impact on society, the economy and the environment. </p>
 <Lottie className="absolute -right-14 -bottom-5 w-24 h-24" animationData={lottiAnimaton}></Lottie>
      </div>
  </div>
  
  </>
  );
};

export default Banner;
