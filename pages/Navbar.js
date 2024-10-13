import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      {/* Navbar Container */}
      <nav className="w-full bg-white fixed top-0 left-0 right-0 z-20 shadow-md">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:flex md:items-center md:px-8">
          
          <div className="flex items-center justify-between py-3 md:py-5">
            <Link href="/">
              <h2 className="text-2xl text-red-900 font-bold">HIGHER HEIGHT</h2>
            </Link>

          
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image src="/close.svg" width={30} height={30} alt="close" />
                ) : (
                  <Image
                    src="/hamburger-menu.svg"
                    width={30}
                    height={30}
                    alt="hamburger-menu"
                    className="focus:border-none active:border-none"
                  />
                )}
              </button>
            </div>
          </div>

          
          <div className={`hidden md:block`}>
            <ul className="flex items-center space-x-6">
              <li className="text-xl font-medium text-black hover:text-red-700 transition">
                <Link href="/">Home</Link>
              </li>
              <li className="text-xl font-medium text-black hover:text-red-700 transition">
                <Link href="/About">About Us</Link>
              </li>
              <li className="text-xl font-medium text-black hover:text-red-700 transition">
                <Link href="/Courses">Courses</Link>
              </li>
              <li className="text-xl font-medium text-black hover:text-red-700 transition">
                <Link href="/Test">Free Moke Test</Link>
              </li>
              <li className="text-xl font-medium text-black hover:text-red-700 transition">
                <Link href="/Contact">Contact Us</Link>
              </li>
              <li className="text-xl font-medium text-black hover:text-red-700 transition">
                <Link href="/Performance">Student Performance</Link>
              </li>
              <li>
                <Link
                  href="tel:+9988763872"
                  className="bg-red-900 text-white font-semibold py-2 px-6 rounded-md transition hover:bg-red-700"
                >
                  Call Us
                </Link>
              </li>
            </ul>
          </div>

          
          <div
            className={`fixed top-0 left-0 z-20 w-3/4 h-screen bg-white p-10 transition-transform transform ${
              navbar ? "translate-x-0" : "-translate-x-full"
            } md:hidden`}
          >
            <ul className="flex flex-col space-y-6">
              <li className="text-xl font-medium text-black hover:text-red-700 transition">
                <Link href="/" onClick={() => setNavbar(false)}>
                  Home
                </Link>
              </li>
              <li className="text-xl font-medium text-black hover:text-red-700 transition">
                <Link href="/About" onClick={() => setNavbar(false)}>
                  About Us
                </Link>
              </li>
              <li className="text-xl font-medium text-black hover:text-red-700 transition">
                <Link href="/Courses" onClick={() => setNavbar(false)}>
                  Courses
                </Link>
              </li>
              <li className="text-xl font-medium text-black hover:text-red-700 transition">
                <Link href="/Test" onClick={() => setNavbar(false)}>
                  Free Moke Test
                </Link>
              </li>
              <li className="text-xl font-medium text-black hover:text-red-700 transition">
                <Link href="/Contact" onClick={() => setNavbar(false)}>
                  Contact Us
                </Link>
              </li>
              <li className="text-xl font-medium text-black hover:text-red-700 transition">
                <Link href="/Performance" onClick={() => setNavbar(false)}>
                  Student Performance
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+9988763872"
                  className="bg-red-900 text-white font-semibold py-2 px-6 rounded-md transition hover:bg-red-700"
                  onClick={() => setNavbar(false)}
                >
                  Call Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
