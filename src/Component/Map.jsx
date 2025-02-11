import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BiFoodMenu, BiTimeFive, BiMap } from "react-icons/bi";

const Map = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function getTimeRemaining() {
    const targetDate = new Date("2025-03-01T00:00:00"); 
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <div className=" my-5 p-6 rounded-md bg-[#91AC8F] ">
      {/* Page Title Animation */}
      <motion.h1 
        className="text-4xl font-bold text-center mb-6 flex justify-center items-center gap-2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
         <span className="text-white">Upcoming Special Drives & Giveaways </span>
      </motion.h1>

      {/* Countdown Timer Animation */}
      <motion.div 
        className="bg-base-100 p-6 rounded-lg shadow-md text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <h2 className="text-xl font-semibold flex justify-center items-center gap-2">
          <BiTimeFive size={24} className="text-red-600" /> Limited-Time Event Ends In:
        </h2>
        <motion.div 
          className="text-2xl font-bold text-red-600 mt-2"
          animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          {`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
        </motion.div>
      </motion.div>

      {/* Events List */}
      <div className="mt-8 space-y-6">
        {/* Event 1 - Slide-Up Animation */}
        <motion.div 
          className="bg-base-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(0,0,0,0.2)" }}
        >
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <BiFoodMenu size={22} className="" />
            Community Ramadan Food Drive
          </h3>
          <p className="">
            Join us in sharing meals this Ramadan! Freshly cooked meals available for those in need.
          </p>
          <p className="text-sm text-green-600 font-semibold flex items-center gap-1">
            <BiMap />  Community Center |  March 1st
          </p>
        </motion.div>

        {/* Event 2 - Slide-Up Animation */}
        <motion.div 
          className="bg-base-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 4px 10px rgba(0,0,0,0.2)" }}
        >
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <BiFoodMenu size={22} className="text-green-600" />
            Weekend Food Giveaway
          </h3>
          <p className="">
            Fresh fruits and vegetables available for pickup. No registration needed!
          </p>
          <p className="text-sm text-green-600 font-semibold flex items-center gap-1">
            <BiMap />  Local Park |  March 3rd
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Map;
