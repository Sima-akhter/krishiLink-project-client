import React from 'react'
import { useLoaderData } from 'react-router'
import AllCropsCard from './AllCropsCard'

const AllCrops = () => {

  const data = useLoaderData()
  console.log(data)



  return (
    <div className='py-16 bg-gradient-to-b from-white to-green-50'>

 
 <div className='flex justify-center items-center '>
         <h1 className='text-center text-4xl font-extrabold text-green-800 mb-6 relative inline-block '>
    <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-900'>
      KrishiLink Farmer's All Crops
    </span>
  </h1>
       </div>

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