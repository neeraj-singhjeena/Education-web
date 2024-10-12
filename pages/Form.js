import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
const CourseInquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    course: "",
  });
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccessMessage(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      dob: "",
      course: "",
    });

    setTimeout(() => setSuccessMessage(false), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
        <Navbar></Navbar>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 md:p-8 mt-10 rounded-lg shadow-lg w-full max-w-lg"
        >
          <h2 className="text-xl font-semibold mb-6 text-center text-black">
            Course Inquiry Form
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Course:</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select a course</option>
              <option value="Course 1">Course 1</option>
              <option value="Course 2">Course 2</option>
              <option value="Course 3">Course 3</option>
            </select>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 mb-10 rounded-md hover:bg-red-700 transition-colors"
          >
            Send
          </button>

          {successMessage && (
            <p className="text-green-500 text-center mt-4">
              Form sent successfully!
            </p>
          )}
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default CourseInquiryForm;
