'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  // State to toggle the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="mainBg h-[60px] flex px-1 lg:px-4 items-center justify-between shadow-md">
      {/* Logo Section */}
      <div className="uppercase cursor-pointer text-sm lg:text-lg flex items-center space-x-2">
        {/* Left side of logo */}
        <span className="text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1 rounded-l-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-700">
         TODO APP by Sir
        </span>
        
        {/* Right side of logo */}
        <span className="text-white bg-gradient-to-r from-red-600 to-yellow-600 px-3 py-1 rounded-r-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-red-700 hover:to-yellow-700">
          BILAL & ANEEQ 
        </span>
      </div>

      {/* Mobile Menu Toggle Button (Visible only on small screens) */}
      <div className="lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className="bg-purple-400 py-2 px-4 rounded text-white hover:bg-purple-500 transition-all duration-300">
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Menu Buttons (Visible on larger screens or when mobile menu is open) */}
      <div className={`flex gap-2 lg:gap-6 text-sm lg:text-lg ${isMobileMenuOpen ? 'block' : 'hidden'} lg:flex`}>
        <Link className="bg-green-600 p-2 rounded-lg text-white hover:bg-green-700 transition duration-300" href="/">
          Home
        </Link>
       
        <Link className="bg-green-600 p-2 rounded-lg text-white hover:bg-green-700 transition duration-300" href="/todo">
          Todo
        </Link>
      </div>

      {/* Login Buttons */}
      <div className="flex gap-2 lg:gap-6 text-sm lg:text-lg">
        <button className="bg-purple-400 py-2 px-4 rounded text-white hover:bg-purple-500 transition-all duration-300">
          Sign In
        </button>
        <button className="bg-purple-400 py-2 px-4 rounded text-white hover:bg-purple-500 transition-all duration-300">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
