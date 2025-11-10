import React from 'react'

const AllCropsCard = ({krishiLink}) => {
    const {name, image, description, pricePerUnit, unit, location, quantity} = krishiLink
  return (
    <div>

      <div className="card bg-base-100  shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{name}</h2>
    <p>Price per Unit : <span>{pricePerUnit}/{unit}</span></p>
    <p>Quantity : <span>{quantity}</span></p>
    <p>Location : <span>{location}</span></p>
    
    

    <p>Description : <span>{description}</span></p>
    <div className="card-actions">
      <button className="btn bg-green-800 text-white w-full">View Details</button>
    </div>
  </div>
</div>


    </div>
  )
}

export default AllCropsCard