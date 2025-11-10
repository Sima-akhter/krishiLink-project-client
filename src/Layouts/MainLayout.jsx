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
      
      <section>
        <Outlet></Outlet>
      </section>

      <section>
        <Footer></Footer>
      </section>

    </div>
  )
}

export default MainLayout