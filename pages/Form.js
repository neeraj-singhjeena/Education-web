// components/CourseInquiryForm.js
import { useState } from "react";
import Footer from "./Footer";
export default function CourseInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    course: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted", formData);
  };

  return (
    <div className=" bg-red-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg mt-10 mb-10 text-white max-w-md mx-auto "
      >
        <h2 className="text-xl font-bold mb-4 text-black">
          Course Inquiry Form
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md text-black"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Phone Number:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md  text-black"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md  text-black"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md  text-black"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Course:</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md  text-black"
            required
          >
            <option value="">Select a course</option>
            <option value="course1">Course 1</option>
            <option value="course2">Course 2</option>
            <option value="course3">Course 3</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-brown-500 text-black p-2 border-2  border-gray-400  bg-red-900  hover:bg-black rounded-md hover:bg-brown-700 transition duration-300"
        >
          Send
        </button>
      </form>
      <Footer></Footer>
    </div>
  );
}
