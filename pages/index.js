import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
// import Courses from "./Courses";

import Footer from "./Footer";
export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <Navbar></Navbar>

      <HeroSection />
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Courses Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-center mb-6">Courses</h2>
            <p className="text-center text-gray-600 mb-8">
              We offer a diverse range of English courses tailored to your
              needs, including preparation for internationally recognized exams
              such as IELTS and PTE, as well as comprehensive Spoken English
              courses.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Course Cards */}
              <div className="bg-white p-6 shadow-lg rounded-lg  hover:bg-red-900  border-red-900  md:hover:text-red-600 md:hover:bg-transparent ">
                <h3 className="text-xl font-semibold mb-2">
                  IELTS Preparation Course
                </h3>
                <p className="text-gray-600  hover:text-white">
                  Prepare for the IELTS exam with comprehensive training and
                  practice materials.
                </p>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg  hover:bg-red-900  border-red-900  md:hover:text-red-600 md:hover:bg-transparent">
                <h3 className="text-xl font-semibold mb-2">
                  PTE Academic Preparation Course
                </h3>
                <p className="text-gray-600  hover:text-white">
                  Prepare for the PTE Academic exam with targeted training and
                  practice exercises.
                </p>
              </div>
              <div className="bg-white p-6 shadow-lg rounded-lg  hover:bg-red-900  border-red-900  md:hover:text-red-600 md:hover:bg-transparent">
                <h3 className="text-xl text-black hover:text-white font-semibold mb-2">
                  Spoken English Course
                </h3>
                <p className="text-gray-600 hover:text-white">
                  Improve your spoken English skills through interactive lessons
                  and practice sessions.
                </p>
              </div>
            </div>
            <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
              <Link href="/Form" onClick={() => setNavbar(!navbar)}>
                <div className="border-2 border-gray-400 text-white bg-red-900  hover:bg-black ">
                  Registration Form
                </div>
              </Link>
            </li>
          </section>

          {/* Features Section */}
          <section className="bg-red-800 text-white py-12 px-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="p-6  text-black  bg-white rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold mb-2">
                  Expert Instructors
                </h4>
                <p>
                  Learn from seasoned educators with extensive experience in
                  IELTS, PTE, and Spoken English instruction, providing
                  practical insights and real-world expertise.
                </p>
              </div>
              <div className="p-6 text-black  bg-white rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold mb-2">
                  Comprehensive Curriculum
                </h4>
                <p>
                  Access comprehensive courses covering all aspects of IELTS,
                  PTE, and Spoken English preparation to expand your language
                  proficiency and communication skills.
                </p>
              </div>
              <div className="p-6  text-black  bg-white rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold mb-2">
                  Recognized Certification
                </h4>
                <p>
                  Earn industry-recognized certificates upon completion of our
                  courses, validating your language proficiency and enhancing
                  your professional profile.
                </p>
              </div>
              <div className="p-6 text-black  bg-white rounded-lg shadow-lg">
                <h4 className="text-lgx font-semibold mb-2">
                  Flexible Learning Options
                </h4>
                <p>
                  Learn at your own pace and schedule, allowing you to balance
                  your language learning journey with other commitments.
                </p>
                {/* <div className="mt-4">
                  <button className="bg-white text-red-800 py-2 px-4 rounded hover:bg-gray-100 transition duration-200" >
                    Get Started
                  </button>
                </div> */}
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="max-w-md sm:max-w-lg lg:max-w-4xl mx-auto p-4 md:p-6 lg:p-8  rounded-lg shadow-md">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Why Choose Us?
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-8">
          Choose us for expert instructors, practical learning, comprehensive
          curriculum, a supportive community, flexible scheduling, career
          guidance, and competitive pricing—a perfect combination for success in
          the field of English language learning.
        </p>
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Experienced Instructors
            </h3>
            <p className="text-base sm:text-lg text-gray-600">
              Learn from experienced educators who bring real-world expertise
              into the classroom.
            </p>
          </div>
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Effective Learning
            </h3>
            <p className="text-base sm:text-lg text-gray-600">
              Gain practical skills to navigate real-life language scenarios and
              build a solid linguistic foundation.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Recognized Certification
            </h3>
            <p className="text-base sm:text-lg text-gray-600">
              Obtain industry-recognized certification upon course completion,
              enhancing your employability and career prospects.
            </p>
          </div>
        </div>
      </div>
      {/* <Courses /> */}
      <Footer />
    </div>
  );
}
