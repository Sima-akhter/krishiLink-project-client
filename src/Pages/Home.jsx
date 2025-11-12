import React from 'react'
import Banner from '../Components/Banner'
import { Link, useLoaderData } from 'react-router'
import AllCropsCard from './AllCropsCard'
import HowItWorks from '../Components/HowItWorks'
import AgroNews from '../Components/AgroNews'

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
        <h1 className='text-center text-2xl text-green-800 mt-10 font-bold'>Latest Posts</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
          {
            data.map(krishiLink => <AllCropsCard key={krishiLink._id} krishiLink={krishiLink}></AllCropsCard>)
          }

        </div>
        <div className='flex justify-center items-center mt-10'>
          <Link to={'/allCrops'} className='bg-green-800 text-white btn' > See All</Link>
        </div>
      </div>
      <section>
        <HowItWorks></HowItWorks>
      </section>

      <section>
        <AgroNews></AgroNews>
      </section>

    </div >
  )
}

export default Home