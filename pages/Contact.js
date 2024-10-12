import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="x text-white min-h-screen mt-20">
        <section className="bg-maroon-500 bg-red-900 text-white p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg">
            Are you ready to embark on a transformative journey towards success?
            Reach out to us and take the first step toward unlocking your full
            potential.
          </p>
        </section>

        <div className="container text-black mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12">
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
              <p>JCT THAPAR COLONY CHOHAL HOSHIARPUR PUNJAB</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-maroon-700">Phone:</h3>
              <p>+91 9988763872</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-maroon-700">Email:</h3>
              <p>info.academicsuite@gmail.com</p>
            </div>
          </div>

          <div className="text-black">
            <h2 className="text-2xl text-black font-bold text-maroon-700 mb-4">
              Have Questions?
            </h2>
            <p className=" mb-6 text-black">
              Please fill the form below, and we will get back to you.
            </p>

            {submitted && (
              <p className="bg-white border-l-4 border-green-500 text-green-700 p-4 mb-4">
                Submit successfully!
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-black">
              <div className="text-black">
                <label className="block text-black">Name</label>
                <input
                  type="text "
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 text-black rounded-md"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-900">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 text-black rounded-md"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-900">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 text-black rounded-md"
                  placeholder="Subject"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-900">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 text-black rounded-md"
                  rows="5"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-maroon-600  p-2 text-black border-2 rounded-md hover:bg-maroon-700 transition duration-300  hover:bg-red-600  border-gray-200  md:hover:text-red-600 md:hover:bg-transparent "
              >
                Submit
              </button>
            </form>
            <div className="flex justify-center items-center mt-10">
              <div className="w-full max-w-screen-lg">
                <iframe
                  className="w-full h-64 md:h-96 rounded-lg shadow-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.909934876927!2d90.40745691542787!3d23.751189494590406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85ff9d2f14b%3A0x915f3a2416c8da69!2sGoogle%20Bangladesh!5e0!3m2!1sen!2sbd!4v1616061491539!5m2!1sen!2sbd"
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
        <Navbar></Navbar>
      </div>
    </>
  );
}
