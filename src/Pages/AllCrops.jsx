import React from 'react'
import { useLoaderData } from 'react-router'
import AllCropsCard from './AllCropsCard'

const AllCrops = () => {

  const data = useLoaderData()
  console.log(data)



  return (
    <div className='py-16 bg-gradient-to-b from-white to-green-50'>

      <h1 className='text-2xl font-bold text-green-800 text-shadow-2xs text-center '>KrishiLink Farmer's All Crops</h1>

      <div className='flex justify-center items-center mt-10'>
        <label className="input">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
          <input type="search" required placeholder="Search" />
        </label>
      </div>



      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
        {
          data.map(krishiLink => <AllCropsCard key={krishiLink._id} krishiLink={krishiLink}></AllCropsCard>)
        }
      </div>

    </div>
  )
}

export default AllCrops