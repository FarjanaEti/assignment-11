import React, { useState, useEffect } from "react";
import { easeOut, motion } from "framer-motion";
import lottiAnimaton from '../assets/Animation - 1734981666471.json';
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
      {/* Added responsive padding and height */}
      <div className="relative max-w-7xl border border-lime-500 h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-box">
        <div
          className="absolute inset-0 flex flex-col transition-transform duration-1000"
          style={{
            transform: `translateY(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-[300px] md:h-[400px] lg:h-[500px] w-full" // Adjusted heights for different screens
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="object-cover h-full w-full"
              />
            </div>
          ))}
        </div>

        {/* Responsive text size and position */}
        <motion.div
          initial={{ x: "100%" }} 
          animate={{ x: "-100%" }}  
          transition={{ duration: 20, delay: 1, ease: easeOut, repeat: Infinity }}
          className="absolute bottom-10 left-5 text-base md:text-2xl lg:text-3xl text-white font-bold" // Adjusted text size
        >
          Sharing Excess is connecting those who have extra food with those who need more
        </motion.div>
      </div>

      {/* Adjusted container width and padding */}
      <div className="relative p-3 w-11/12 md:w-2/3 lg:w-1/3 mx-auto -top-20 md:-top-24 rounded-lg bg-white bg-opacity-50">
        <div className="rounded-md bg-emerald-100 p-3 md:p-5">
          {/* Lottie animation responsiveness */}
          <Lottie className="absolute -left-10 -top-5 w-16 h-16 md:-left-14 md:-top-10 md:w-24 md:h-24" animationData={lottiAnimaton}></Lottie>
          <p>
            <span className="text-lg md:text-xl font-semibold">
              What are the main goals of our project?
            </span>
            Food Sharing project was seeking to understand contemporary food sharing and particularly sharing beyond familial settings, so beyond the family. We were particularly interested in its impact on society, the economy, and the environment.
          </p>
          <Lottie className="absolute -right-10 -bottom-3 w-16 h-16 md:-right-14 md:-bottom-5 md:w-24 md:h-24" animationData={lottiAnimaton}></Lottie>
        </div>
      </div>
    </>
  );
};

export default Banner;
