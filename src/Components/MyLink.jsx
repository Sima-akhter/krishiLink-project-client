import React from 'react'
import { NavLink } from 'react-router'

const MyLink = ({to, className, children}) => {
  return (
    <NavLink to={to} className={({isActive})=>isActive? 'text-green-800 font-bold underline':`${className} font-bold`}>{children}</NavLink>
  )
}

export default MyLink