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

       <main>
        <Outlet></Outlet>
       </main>

       <Footer></Footer>


    </div>
  )
}

export default AuthLayout