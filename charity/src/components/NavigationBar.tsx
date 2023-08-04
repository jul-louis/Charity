import { Link } from "react-router-dom";
import React, { useState } from "react";

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-800 py-2 px-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <svg
              className="fill-current h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="0" cy="0" r="40" />
              <circle cx="100" cy="100" r="80" />
            </svg>
            <span className="font-light text-xl tracking-tight">
              kraken/charity
            </span>
          </div>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center px-3 py-2 border rounded text-teal-100 border-teal-100 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`p-4 w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-md lg:flex-grow">
          <Link
            to="/Charity"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
          >
            Charity
          </Link>
          <Link
            to="/Favorite"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
          >
            Favorite
          </Link>
          <Link
            to="/news"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
          >
            News
          </Link>
          <Link
            to="/About"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-4"
          >
            About
          </Link>
        </div>
        {/* <div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >
            About
          </a>
        </div> */}
      </div>
    </nav>
  );
}

export default NavigationBar;
