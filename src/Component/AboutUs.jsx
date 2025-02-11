import React from 'react';
import { FaHandHoldingHeart, FaUsers, FaGift } from 'react-icons/fa'; // Importing icons from react-icons

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold ">About Us</h1>
        <p className="mt-2 text-lg ">Join us in our mission to share food and support our community!</p>
      </div>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold t mb-4">Our Mission</h2>
          <p className="text-lg  leading-relaxed">
            We are a community-driven platform dedicated to reducing food waste and ensuring that everyone has access to nutritious food. Our mission is to bring people together through food donations, where anyone can donate food they no longer need, and anyone in need can receive it. Join us in making a difference today!
          </p>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img src="https://i.ibb.co.com/BK7TMqXH/bn-4.jpg" alt="Community Helping" className="rounded-lg shadow-xl" />
        </div>
      </div>

      {/* Donation and Request Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
        {/* Donation Section */}
        <div className="flex flex-col items-center justify-center p-8 border border-gray-300 rounded-lg shadow-lg">
          <FaHandHoldingHeart size={48} className="text-red-600 mb-4" />
          <h3 className="text-2xl font-semibold  mb-4">Donate Food</h3>
          <p className="text-lg  text-center mb-4">
            If you have extra food, you can donate it to help those in need. Our platform connects people who want to donate with those who require food.
          </p>
          {/* <a
            href="/donate"
            className="btn btn-outline btn-accent  p-3 mt-4 rounded-md hover:bg-red-600 transition duration-300"
          >
            Donate Now
          </a> */}
        </div>

        {/* Request Section */}
        <div className="flex flex-col items-center justify-center p-8 border border-gray-300 rounded-lg shadow-lg">
          <FaGift size={48} className="text-green-600 mb-4" />
          <h3 className="text-2xl font-semibold  mb-4">Request Food</h3>
          <p className="text-lg  text-center mb-4">
            If you're in need of food, you can request it from others in your community. We aim to help you get the support you need.
          </p>
          {/* <a
            href="/request"
            className="btn btn-outline btn-accent  p-3 mt-4 rounded-md hover:bg-green-600 transition duration-300"
          >
            Request Food
          </a> */}
        </div>
      </div>

      {/* Community Section */}
      <div className="bg-gray-100 py-12 px-4 rounded-lg shadow-lg mb-12">
        <div className="text-center">
          <FaUsers size={48} className="mx-auto text-blue-600 mb-4" />
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Join Our Community</h2>
          <p className="text-lg text-gray-600 mb-6">
            Our platform is powered by a supportive community of donors and recipients who believe in helping each other. Together, we can make a difference!
          </p>
          <a
            href="/join"
            className="btn btn-outline btn-primary text-white p-3 mt-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Become a Member
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
