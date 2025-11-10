import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router'
import Footer from './Footer'

const AuthLayout = () => {
  return (
    <div>
       <header>
        <Navbar></Navbar>
       </header>

       <main className='max-w-screen-1xl mx-auto w-full px-4 md:px-8 lg:px-12 py-4 md:py-8 lg:py-12 flex-1'>
        <Outlet></Outlet>
       </main>

       <Footer></Footer>


    </div>
  )
}

export default AuthLayout