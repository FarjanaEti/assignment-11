import React, { useState, useEffect } from "react";

const Banner = () => {
   const images = [
    "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
    "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
    "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
    "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
    "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
    "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
    "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="relative h-96 overflow-hidden rounded-box ">
      <div
        className="absolute inset-0 flex flex-col transition-transform duration-1000"
        style={{
          transform: `translateY(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-96 w-full"
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="object-cover h-full "
            />
          </div>
        ))}
      </div>


      <div className="card bg-base-100 w-96 shadow-xl overflow-hidden group">
  {/* Image Container */}
  <figure className="relative w-full h-64 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-[500px] transition-transform duration-1000 group-hover:translate-y-[-1000px]">
      <img
        className="w-full h-64 object-cover"
        src="https://i.ibb.co/MDzvPPf/download8.jpg"
        alt="Image 1"
      />
      <img
        className="w-full h-64 object-cover"
        src="https://i.ibb.co/Pj988Gq/images.jpg"
        alt="Image 2"
      />
      <img
        className="w-full h-64 object-cover"
        src="https://i.ibb.co/1TxrJFN/462561728-536882932418932-6619261142512956761-n.jpg"
        alt="Image 3"
      />
      <img
        className="w-full h-64 object-cover"
        src="https://i.ibb.co/Pj988Gq/images.jpg"
        alt="Image 4"
      />
    </div>
  </figure>
  {/* Card Body */}
  <div className="card-body items-center text-center">
    <h2 className="card-title">Demo</h2>
    
  </div>
</div>




  </div>
  );
};

export default Banner;
