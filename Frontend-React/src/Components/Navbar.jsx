import React, { useState } from "react";
import Logo from "../assets/logoiit.png";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-base-100 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand Name */}
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-10 w-auto" />
            <a className="pl-2 text-2xl font-bold">IIT EVENTS</a>
          </div>

          {/* Hamburger Menu (Visible on Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center space-x-6 ">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Events</a>
            <a href="#">Host an Event</a>
            <a href="#">Contact Us</a>
            <a href="#" className="btn btn-primary px-6 font-medium">
              Sign Up
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Right-Side Sliding Drawer */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 z-10`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-left space-y-4 mt-10 px-5">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Events</a>
          <a href="#">Host an Event</a>
          <a href="#">Contact Us</a>
          <a href="#" className="btn btn-primary px-6 w-40">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
