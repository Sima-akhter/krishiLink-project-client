import React from 'react'
import { useLoaderData } from 'react-router'

const CropsDetails = () => {
    const data = useLoaderData()
    const krishiLink = data.result
    console.log(krishiLink)
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
    <p>{krishiLink.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>


    </div>
  )
}

export default CropsDetails