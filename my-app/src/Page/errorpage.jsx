import React from "react";
import { Link } from "react-router-dom";

function Errorpage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-10 rounded-2xl shadow-lg">
        <h1 className="text-7xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-gray-600">
          Oops! The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default Errorpage;
