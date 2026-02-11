import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Productlistpage() {
  const [mydata, setdata] = useState([]);
  const [mycat, setcat] = useState([]);
  const [myfilter, setfilter] = useState([]);

  const Myapi = () => {
    axios.get("https://dummyjson.com/products").then((d) => {
      setdata(d.data.products);
      setfilter(d.data.products);

      const a = d.data.products;
      const b = a.map((x) => x.category);
      setcat([...new Set(b)]);
    });
  };

  const myproductfilter = (e) => {
    const filterdata = myfilter.filter((d) => {
      return d.category === e.target.value;
    });
    setdata(filterdata);
  };

  useEffect(() => {
    Myapi();
  }, []);

  return (
    <div className="p-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          className="border px-3 py-2 rounded w-56"
          onChange={myproductfilter}
        >
          <option hidden>Select Category</option>
          {mycat.map((d) => (
            <option key={d}>{d}</option>
          ))}
        </select>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mydata.map((d) => (
          <div key={d.id} className="bg-white shadow rounded-lg p-4">
            <h5 className="font-semibold mb-2">Pro Id: {d.id}</h5>

            <img
              src={d.thumbnail}
              alt={d.title}
              className="w-full h-40 object-cover mb-3 rounded"
            />

            {/* IMPORTANT FIX */}
            <Link
              to={`/productdetailspage/${d.id}`}
              className="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
            >
              Product Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productlistpage;
