"use client";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full top-0 shadow-md z-50 transition-all duration-300">
      <div className="container mx-auto px-6 flex justify-between items-center py-2">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            className="h-12 cursor-pointer"
            src="/logo.png"
            alt="logo"
            width={150}
            height={100}
          />
        </div>

        {/* Hamburger Menu for medium and small screens */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6 text-white" />
            ) : (
              <FaBars className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Links for large screens */}
        <div className="hidden lg:flex space-x-8 font-medium text-lg">
          {["Home", "About", "Services", "Pricing", "Blog", "Contact"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="hover:text-green-600 transition-colors duration-300"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Sign In Button for large screens */}
        <div className="hidden lg:flex">
          <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-500 transition-all duration-300 flex items-center">
            <IoIosLogOut className="mr-2 text-xl" />
            <span>Sign In</span>
          </button>
        </div>
      </div>

      {/* Mobile & Medium Menu */}
      <div
        className={`${
          isOpen
            ? "bg-[#27AE60] text-gray-300 max-h-screen"
            : "bg-white max-h-0"
        } lg:hidden overflow-hidden transition-all duration-500`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          {["Home", "About", "Services", "Pricing", "Blog", "Contact"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className={`text-lg transition-colors duration-300 ${
                  isOpen
                    ? "text-white hover:text-gray-300"
                    : "hover:text-green-600"
                }`}
              >
                {item}
              </a>
            )
          )}
          <button className="bg-white text-green-700 px-5 py-2 rounded-md hover:bg-gray-100 transition-all duration-300 flex items-center">
            <span className="mr-2">Sign In</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
