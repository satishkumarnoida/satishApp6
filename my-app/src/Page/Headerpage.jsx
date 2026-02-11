import React from "react";
import { Link, Outlet } from "react-router-dom";

function Headerpage() {
  return (
    <>
      <header className="bg-gray-900 text-white px-6 py-8">
        <div className="flex flex-wrap items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="text-xl font-semibold">
            MyApp
          </Link>

          
          <ul className="flex flex-wrap items-center gap-6 mt-3 lg:mt-0">
            <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
            <li><Link to="/productlistpage" className="hover:text-white">Product</Link></li>
            <li><Link to="#" className="hover:text-white">Pricing</Link></li>
            <li><Link to="#" className="hover:text-white">FAQs</Link></li>
            <li><Link to="#" className="hover:text-white">About</Link></li>
          </ul>

     
          <div className="flex items-center gap-3 mt-3 lg:mt-0">
            <input
              type="search"
              placeholder="Search..."
              className="px-3 py-1 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            />

            <Link
              to="/sidebarepage"
              className="px-4 py-1 border border-white rounded hover:bg-white hover:text-black transition"
            >
              Go login
            </Link>

            <button className="px-4 py-1 bg-yellow-500 text-black rounded hover:bg-yellow-400">
              Sign-up
            </button>
          </div>
        </div>
      </header>      
    </>
  );
}

export default Headerpage;
