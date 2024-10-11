import { useState } from "react";
import Footer from "./Footer";

export default function Contact() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State for showing the success message
  const [submitted, setSubmitted] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    // You can add form validation here if needed

    // After submission, show success message and clear the form
    setSubmitted(true);

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Hide the success message after a few seconds (optional)
    setTimeout(() => {
      setSubmitted(false);
    }, 3000); // Message disappears after 3 seconds
  };

  // Function to update form fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="bg-red-900 text-white min-h-screen">
        {/* Header Section */}
        <section className="bg-maroon-500 text-white p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg">
            Are you ready to embark on a transformative journey towards success?
            Reach out to us and take the first step toward unlocking your full
            potential.
          </p>
        </section>

        {/* Contact Details and Form Section */}
        <div className="container mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-maroon-700">Contact Us</h2>
            <p className="">
              Let's connect and explore your learning journey together. Reach
              out to us for expert guidance, tailored solutions, and unleash
              your full potential.
            </p>
            <div>
              <h3 className="text-lg font-bold text-maroon-700">Address:</h3>
              <p>Academic Suite India, Gurdaspur, Punjab, Pin: 144027</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-maroon-700">Phone:</h3>
              <p>+91 84376-08821</p>
              <p>01850-505060</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-maroon-700">Email:</h3>
              <p>info.academicsuite@gmail.com</p>
            </div>
          </div>

          {/* Form Section */}
          <div>
            <h2 className="text-2xl font-bold text-maroon-700 mb-4">
              Have Questions?
            </h2>
            <p className="text-gray-300 mb-6">
              Please fill the form below, and we will get back to you.
            </p>

            {/* Success Message */}
            {submitted && (
              <p className="bg-white border-l-4 border-green-500 text-green-700 p-4 mb-4">
                Submit successfully!
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Subject"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-300">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows="5"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-maroon-600 text-white p-2  border-2 rounded-md hover:bg-maroon-700 transition duration-300  hover:bg-red-600  border-gray-200  md:hover:text-red-600 md:hover:bg-transparent "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
