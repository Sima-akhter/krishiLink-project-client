import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import AllCropsCard from "./AllCropsCard";

const AllCrops = () => {
  const data = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");

  const [filteredCrops, setFilteredCrops] = useState(data || []);
 
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredCrops(data);
    } else {
      const filtered = data.filter((item) =>
        item.name?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCrops(filtered);
    }
  }, [searchTerm, data]);

  return (
    <div className="py-16 bg-gradient-to-b from-white to-green-50 min-h-screen">
      <div className="flex justify-center items-center">
        <h1 className="text-center text-4xl font-extrabold text-green-800 mb-6 relative inline-block">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-900">
            KrishiLink Farmer's All Crops
          </span>
        </h1>
      </div>

      
      <div className="flex justify-center items-center mt-10">
        <label className="input flex items-center gap-2 border-2 border-green-500 rounded-md px-4 py-2 shadow-sm bg-white">
          <svg
            className="h-[1em] opacity-70 text-green-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            placeholder="Search crops..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="outline-none text-gray-700 w-64 bg-transparent"
          />
        </label>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 px-5 md:px-10">
        {filteredCrops.length > 0 ? (
          filteredCrops.map((krishiLink) => (
            <AllCropsCard key={krishiLink._id} krishiLink={krishiLink} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 text-lg mt-10">
            No crops found for “{searchTerm}”.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllCrops;
