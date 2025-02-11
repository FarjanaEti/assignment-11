import React from 'react';

const Contact = () => {
   return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-center mb-6">If you have any questions, feel free to reach out to us:</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold">Contact Information</h3>
          <p>Email: <a href="mailto:contact@gadgetheaven.com" className="text-blue-600">contact@foodsharing.com</a></p>
          <p>Phone: (123) 456-7890</p>
          <p>Follow us:</p>
          <ul className="list-disc pl-5">
            <li><a href="https://www.facebook.com/" className="text-blue-600">Facebook</a></li>
            <li><a href="https://x.com/login?" className="text-blue-600">Twitter</a></li>
            <li><a href="https://www.instagram.com/" className="text-blue-600">Instagram</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold">Send Us a Message</h3>
          <form>
            <div className="mb-4">
              <label className="block mb-2">Your Message</label>
              <textarea rows="4" className="w-full p-2 border border-gray-300 rounded-md" placeholder="Type your message here..."></textarea>
            </div>
            <button type="submit" className="btn-accent btn text-white px-6 py-2 rounded-md hover:bg-blue-500">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;