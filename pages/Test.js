import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Test() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    qualification: "",
    ieltsTest: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    setIsSubmitted(true);

    
    setFormData({
      name: "",
      phone: "",
      qualification: "",
      ieltsTest: "",
    });

   
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6 text-red-900">
            IELTS Inquiry Form
          </h2>

         
          {isSubmitted && (
            <div className="mb-4 p-4 text-center text-green-700 bg-green-100 border border-green-300 rounded-md">
              Sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Name: *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
                placeholder="Enter your name"
              />
            </div>

            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Phone Number: *
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
                placeholder="Enter your phone number"
              />
            </div>

            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Qualification *
              </label>
              <select
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
              >
                <option value="" disabled>
                  Select Qualification
                </option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
                <option value="Post-Graduate">Post-Graduate</option>
              </select>
            </div>

          
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Have you given IELTS/PTE test before? *
              </label>
              <div className="flex items-center space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="ieltsTest"
                    value="yes"
                    onChange={handleChange}
                    className="form-radio text-red-700 focus:ring-red-700"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="ieltsTest"
                    value="no"
                    onChange={handleChange}
                    className="form-radio text-red-700 focus:ring-red-700"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>

            
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-red-900 text-white font-semibold py-2 px-6 rounded-md transition hover:bg-red-800 focus:outline-none"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Test;
