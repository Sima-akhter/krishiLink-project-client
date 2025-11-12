import React, { use } from 'react'
import { Link, useLoaderData } from 'react-router'
import { AuthContext } from '../Provaider/AuthProvider'
import RecievedInterest from '../Components/RecievedInterest'
import InterestForm from '../Components/InterestForm'

const CropsDetails = () => {
  const data = useLoaderData()
  const {user} = use(AuthContext)
  
  const krishiLink = data.result
  const {pricePerUnit, _id, owner} = krishiLink
  
  return (
    <div>

      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img
            src={krishiLink.image}
            alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{krishiLink.name}</h2>
          <p>{krishiLink.type}</p>
          <p className="text-lg font-semibold ">
                        Price per unit: ${pricePerUnit}
                    </p>
          <p>{krishiLink.description}</p>
          <div className="card-actions justify-end">
            <Link to={`/updateCrops/${_id} `} className="btn btn-primary">Update</Link>
            <button className="btn btn-primary">Deleted</button>
          </div>
        </div>
      </div>

      {
        user.email === krishiLink.owner.ownerEmail ?
        <RecievedInterest _id={_id} owner={owner}></RecievedInterest> :
        <InterestForm pricePerUnit={pricePerUnit} _id={_id} owner={owner}></InterestForm>
      }


    </div>
  )
}

export default CropsDetails