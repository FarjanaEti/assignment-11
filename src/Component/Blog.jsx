import React from 'react';
import { motion } from 'framer-motion';
import { FaGoogle } from 'react-icons/fa';
const Blog = () => {
  const logos = [
      'https://i.ibb.co.com/vPC2v5s/l-4.jpg'   ,                     
      'https://i.ibb.co.com/tbJTdkH/l-3.jpg'   ,                     
      'https://i.ibb.co.com/4M1yM8w/l-2.jpg'   ,                     
      'https://i.ibb.co.com/ZSFs0Rc/l-1.jpg'   ,                                        
    
  ];

  return (
    <div className="p-5 text-white  bg-[#91AC8F] rounded-xl shadow-2xl my-5">
      <section className="text-center  ">
        <h1 className="text-4xl font-semibold  mb-6 ">Supported By</h1>
        <p className="text-lg  ">
          We are grateful for the support and collaboration of organizations and individuals who help make this food-sharing platform a reality.
        </p>

        <h2 className="text-3xl font-semibold  mb-3">Our Partners and Sponsors</h2>

        <div className="flex justify-center items-center mb-10 space-x-8  overflow-hidden">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className=""
              initial={{ x: '100%' }} 
              animate={{ x: 0 }}      
              exit={{ x: '-100%' }}    
              transition={{
             duration: 1.5,         
             repeat: Infinity,       
             ease: 'easeInOut',     
                            }}
            >
              <img src={logo} alt={`Partner ${index + 1}`} className="w-20 h-20 rounded" />
            </motion.div>
          ))}
        </div>
        <h2 className="text-3xl font-semibold  ">Become a Supporter</h2>
          <p className="text-lg  mb-6">
            We welcome new partners, sponsors, and volunteers to join us in making a greater impact. If you’re interested in supporting our food-sharing initiative, please contact us.
          </p>

          <ul className="text-lg ">
            <li>Email: <a href="mailto:support@foodsharingplatform.com" className="text-blue-500 hover:underline">support@foodsharingplatform.com</a></li>
            <li>Phone: +1 123-456-7890</li>
            <li>Address: 123 Dhanmondi-15, Dhaka, Bangladesh</li>
            </ul>
      </section>
    </div>
  );
};

export default Blog;