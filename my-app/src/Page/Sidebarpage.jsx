import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebarpage() {
  const [homeOpen, setHomeOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [ordersOpen, setOrdersOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <div className="w-64 h-screen bg-gray-100 p-4 shadow sticky fixed">
      <Link to="/" className="block text-xl font-semibold pb-3 mb-3 border-b">
        Collapsible
      </Link>

      <ul className="space-y-2">
        {/* Home */}
        <li>
          <button
            onClick={() => setHomeOpen(!homeOpen)}
            className="w-full text-left px-3 py-2 rounded hover:bg-gray-200"
          >
            Home
          </button>

          {homeOpen && (
            <ul className="ml-4 mt-2 space-y-1 text-sm">
              <li><Link to="/" className="block hover:text-blue-600">Home</Link></li>
              <li><Link to="/productlistpage" className="block hover:text-blue-600">Product</Link></li>
              <li><Link to="/graph" className="block hover:text-blue-600">Graph</Link></li>
              <li><Link to="/contact" className="block hover:text-blue-600">Contact</Link></li>
              <li><Link to="/about" className="block hover:text-blue-600">About</Link></li>
            </ul>
          )}
        </li>

        {/* Dashboard */}
        <li>
          <button
            onClick={() => setDashboardOpen(!dashboardOpen)}
            className="w-full text-left px-3 py-2 rounded hover:bg-gray-200"
          >
            Dashboard
          </button>

          {dashboardOpen && (
            <ul className="ml-4 mt-2 space-y-1 text-sm">
              <li><a href="#">Overview</a></li>
              <li><a href="#">Weekly</a></li>
              <li><a href="#">Monthly</a></li>
              <li><a href="#">Annually</a></li>
            </ul>
          )}
        </li>

        {/* Orders */}
        <li>
          <button
            onClick={() => setOrdersOpen(!ordersOpen)}
            className="w-full text-left px-3 py-2 rounded hover:bg-gray-200"
          >
            Orders
          </button>

          {ordersOpen && (
            <ul className="ml-4 mt-2 space-y-1 text-sm">
              <li><a href="#">New</a></li>
              <li><a href="#">Processed</a></li>
              <li><a href="#">Shipped</a></li>
              <li><a href="#">Returned</a></li>
            </ul>
          )}
        </li>

        <hr className="my-3" />

        {/* Account */}
        <li>
          <button
            onClick={() => setAccountOpen(!accountOpen)}
            className="w-full text-left px-3 py-2 rounded hover:bg-gray-200"
          >
            Account
          </button>

          {accountOpen && (
            <ul className="ml-4 mt-2 space-y-1 text-sm">
              <li><a href="#">New...</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Sign out</a></li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Sidebarpage;
