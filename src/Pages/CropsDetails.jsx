import React, { use } from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router'
import { AuthContext } from '../Provaider/AuthProvider'
import RecievedInterest from '../Components/RecievedInterest'
import InterestForm from '../Components/InterestForm'


const CropsDetails = () => {
  const data = useLoaderData()
  const { user } = use(AuthContext)

  const krishiLink = data.result

  
  

  const { pricePerUnit, _id, owner, quantity } = krishiLink

  return (
    <div>

      <div className="card lg:card-side bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
        <figure className="lg:w-1/3">
          <img
            src={krishiLink.image}
            alt={krishiLink.name}
            className="h-64 w-full object-cover"
          />
        </figure>
        <div className="card-body p-6 space-y-2">
          <h2 className="card-title text-2xl font-bold text-gray-800">
            {krishiLink.name}
          </h2>
          <p className="text-gray-500 font-medium">{krishiLink.type}</p>

          <p className="text-lg font-semibold text-green-600">
             Price per unit: ${pricePerUnit}
          </p>

          <p>Quantity:- {krishiLink.quantity}</p>

          <p className="text-gray-600 leading-relaxed">
            {krishiLink.description}
          </p>

          
        </div>
      </div>

      {
        user.email === krishiLink.owner.ownerEmail ?
          <RecievedInterest _id={_id} owner={owner}></RecievedInterest> :
          <InterestForm pricePerUnit={pricePerUnit} _id={_id} owner={owner} availableQuantity={quantity}></InterestForm>
      }


    </div>
  )
}

export default CropsDetails