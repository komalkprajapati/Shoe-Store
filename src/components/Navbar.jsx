import React, { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import SigninForm from "./forms/SigninForm";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const storedata = JSON.parse(localStorage.getItem("user")) || null;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
  
  };

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-indigo-500">
          SneakerStore
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          {["Home", "About", "Product", "Cart", "Order", "Contact"].map(
            (item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-lg font-medium hover:text-indigo-400 transition duration-300"
              >
                {item}
              </NavLink>
            )
          )}
        </nav>

        {/* Login Button */}
        <div className="flex gap-5">
         
          <button 
          onClick={handleLogout}
          className="hidden lg:block bg-indigo-500 hover:bg-indigo-600 text-sm px-4 py-2 rounded-lg font-medium transition duration-300">
            <a href="/signin">Logout</a>
          </button>
          
          <div>
            <NavLink
              to="/profile"
              className="text-2xl font-bold text-indigo-500"
            >
              {storedata.username}
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center justify-center w-10 h-10 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 transition duration-300"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-2/3 h-full bg-gray-800 shadow-lg transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex flex-col p-6 space-y-6">
          <NavLink
            to="/"
            className="text-2xl font-bold text-indigo-500"
            onClick={toggleMenu}
          >
            SneakerStore
          </NavLink>
          {["Home", "About", "Product", "Cart", "Order", "Contact"].map(
            (item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-lg font-medium text-white hover:text-indigo-400 transition duration-300"
                onClick={toggleMenu}
              >
                {item}
              </NavLink>
            )
          )}

          <button 
          onClick={handleLogout}
          className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-sm px-4 py-2 rounded-lg font-medium transition duration-300">
            <a href="/signin">Logout</a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
