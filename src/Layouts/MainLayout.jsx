import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Footer'

const MainLayout = () => {
  return (
    <div>

     <nav>
        <Navbar></Navbar>
     </nav>
      
      <section className='max-w-screen-1xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1'>
        <Outlet></Outlet>
      </section>

      <section>
        <Footer></Footer>
      </section>

    </div>
  )
}

export default MainLayout