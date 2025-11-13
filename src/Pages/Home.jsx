import React from 'react'
import Banner from '../Components/Banner'
import { Link, useLoaderData } from 'react-router'
import AllCropsCard from './AllCropsCard'
import HowItWorks from '../Components/HowItWorks'
import AgroNews from '../Components/AgroNews'
import AboutKrishiLink from '../Components/AboutKrishiLink'
import WhyChooseUs from '../Components/WhyChooseUs'

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
       <div className='flex justify-center items-center mt-10'>
         <h1 className='text-center text-4xl font-extrabold text-green-800 mb-6 relative inline-block '>
    <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-900'>
      Latest Crops Products
    </span>
  </h1>
       </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
          {
            data.map(krishiLink => <AllCropsCard key={krishiLink._id} krishiLink={krishiLink}></AllCropsCard>)
          }

        </div>
        <div className='flex justify-center items-center mt-10'>
          <Link to={'/allCrops'} className='text-white border-none bg-gradient-to-b from-green-500 to-green-900 hover:from-green-600 hover:to-green-800 transition-all duration-300 btn' > See All</Link>
        </div>
      </div>
      <section>
        <HowItWorks></HowItWorks>
      </section>

      <section>
        <AgroNews></AgroNews>
      </section>

      <section>
        <AboutKrishiLink></AboutKrishiLink>
      </section>

      <section>
        <WhyChooseUs></WhyChooseUs>
      </section>

    </div >
  )
}

export default Home