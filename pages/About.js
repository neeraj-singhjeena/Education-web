// components/AboutUsSection.js
import Link from "next/link";
import Footer from "./Footer";
import Navbar from "./Navbar";
// import Link from "next/link";
const About = () => {
  return (
    <>
      <section className="relative h-80 bg-gradient-to-r from-red-900 to-red-800 text-white flex items-center mt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-xl">
            
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              About Us
            </h1>

            
            <p className="mt-4 text-base md:text-xl">
              Discover Our Mission: Empowering Individuals Through English
              Language. Learn About Our Commitment to Excellence in English
              Language.
            </p>

            
            <div className="mt-8">
              <a
                href="mailto:institute.hhie@gmail.com"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-md transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* What We're All About Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
              What We're All About
            </h2>
            <p className="text-base md:text-lg text-center md:text-left">
              We are here to help you achieve your great potential in life with
              the English language.
            </p>
          </section>

          
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
              Learn Something Every Day
            </h2>
            <p className="text-base md:text-lg text-center md:text-left mb-4">
              Our goal is to empower individuals with English language. Our
              expert instructors are dedicated to providing a supportive
              learning environment where you can unlock your potential.
            </p>
            <p className="text-sm md:text-base text-gray-600 text-center md:text-left">
              Rajnish Kaur
              <br />
              Owner
            </p>
          </section>

          
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
              What is our vision
            </h2>
            <p className="text-base md:text-lg italic text-center md:text-left mb-6">
              "It is impossible for a man to learn what he thinks he already
              knows."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vision Details */}
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <p className="text-base md:text-lg">
                  Welcome to our English Learning Institute, where we are a team
                  of dedicated language educators passionate about transforming
                  lives through language education. With a shared vision of
                  overcoming language barriers, we aim to empower individuals
                  with the language skills and proficiency needed to excel in an
                  increasingly globalized world.
                </p>
              </div>

              
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <p className="text-base md:text-lg">
                  Our diverse team of expert language instructors brings a
                  wealth of experience and linguistic expertise to the
                  classroom. We are committed to staying at the forefront of
                  language-teaching methodologies and industry trends.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
      <Navbar></Navbar>
    </>
  );
};

export default About;
