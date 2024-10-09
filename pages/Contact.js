import { useState } from "react";
import Footer from "./Footer";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError("Please fill out all fields.");
      return;
    }
    // Send data to server or API here
    setSuccess("Message sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="container mx-auto p-4 md:p-6 lg:p-12">
        <div className="h-screen bg-red-600">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-4">
            Are you ready to embark on a transformative journey towards success?
            Look no further. It's time to reach out and take the first step
            towards achieving your full potential. If you're passionate about
            English language learning, we are here to guide you through an
            enriching experience.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="text-lg mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="py-2 pl-10 text-sm text-gray-700"
            placeholder="John Doe"
          />
          <label className="text-lg mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-2 pl-10 text-sm text-gray-700"
            placeholder="john.doe@example.com"
          />
          <label className="text-lg mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="py-2 pl-10 text-sm text-gray-700"
            placeholder="Your message here..."
            rows={5}
          />
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && <p className="text-green-500 mt-2">{success}</p>}
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
