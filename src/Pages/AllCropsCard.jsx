import React from 'react'
import { Link } from 'react-router'

const AllCropsCard = ({ krishiLink }) => {
  const { name, image, description, pricePerUnit, unit, location, quantity, _id } = krishiLink
  return (
    <div>

      <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-2xl transition duration-300">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl w-full h-[250px] object-cover" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{name}</h2>
          <p>Price per Unit : <span>{pricePerUnit}/{unit}</span></p>
          <p>Quantity : <span>{quantity}</span></p>
          <p>Location : <span>{location}</span></p>



          <p>Description : <span>{description}</span></p>
          <div className="card-actions">
            <Link to={`/cropsDetails/${_id}`} className="btn bg-green-800 text-white w-full">View Details</Link>
          </div>
        </div>
      </div>


    </div>
  )
}

export default AllCropsCard