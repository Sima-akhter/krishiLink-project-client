import React from 'react'
import { Link } from 'react-router'

const AllCropsCard = ({ krishiLink }) => {
  const { name, image, description, pricePerUnit, unit, location, quantity, _id } = krishiLink
  return (
    <div>

     <div className="bg-white shadow-md rounded-2xl overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 border border-green-100">
  {/* Image section */}
  <figure className="relative overflow-hidden">
    <img
      src={image}
      alt={name}
      className="rounded-t-2xl w-full h-56 object-cover transform hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 via-green-700 to-green-900"></div>
  </figure>

  {/* Content section */}
  <div className="p-6 space-y-2">
    <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>

    <p className="text-gray-600">
      <span className="font-semibold text-gray-800">💰 Price per Unit:</span>{" "}
      <span className="text-green-700 font-medium">
        {pricePerUnit}/{unit}
      </span>
    </p>

    <p className="text-gray-600">
      <span className="font-semibold text-gray-800">📦 Quantity:</span>{" "}
      <span>{quantity}</span>
    </p>

    <p className="text-gray-600">
      <span className="font-semibold text-gray-800">📍 Location:</span>{" "}
      <span>{location}</span>
    </p>

    <p className="text-gray-600 line-clamp-3">
      <span className="font-semibold text-gray-800">📝 Description:</span>{" "}
      {description}
    </p>

    {/* Button */}
    <div className="pt-4">
      <Link
        to={`/cropsDetails/${_id}`}
        className="btn text-white border-none bg-gradient-to-b from-green-700 to-green-900 hover:from-green-600 hover:to-green-800 transition-all duration-300 w-full shadow-md hover:shadow-lg"
      >
        View Details
      </Link>
    </div>
  </div>
</div>



    </div>
  )
}

export default AllCropsCard