import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Performance() {
  const [studentID, setStudentID] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setStudentID(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (studentID) {
      setMessage(`Performance details for Student ID: ${studentID}`);
    } else {
      setMessage("Please enter a valid Student ID.");
    }

    
    setStudentID("");
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="flex mt-1 items-center justify-center min-h-screen bg-white">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6 text-red-900">
            Check Daily Performance
          </h2>

          
          {message && (
            <div className="mb-4 p-4 text-center text-blue-700 bg-blue-100 border border-blue-300 rounded-md">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col">
            {/* Student ID Input Field */}
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Student ID:
            </label>
            <input
              type="text"
              value={studentID}
              onChange={handleChange}
              placeholder="Enter Student ID"
              required
              className="mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
            />

           
            <button
              type="submit"
              className="bg-red-900 text-white font-semibold py-2 rounded-md transition hover:bg-red-800 focus:outline-none"
            >
              Check Performance
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Performance;
