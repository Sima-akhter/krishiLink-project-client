import React from 'react'
import Banner from '../Components/Banner'
import { useLoaderData } from 'react-router'
import AllCrops from './AllCrops'
import AllCropsCard from './AllCropsCard'

const Home = () => {
  const data = useLoaderData()
  console.log(data

  )
  return (
    <div>

      <section>
        <Banner></Banner>
      </section>


      <div>
        <h1 className='text-center'>Latest Posts</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
          {
            data.map(krishiLink => <AllCropsCard key={krishiLink._id} krishiLink={krishiLink}></AllCropsCard>)
          }
        </div>
      </div>

    </div>
  )
}

export default Home