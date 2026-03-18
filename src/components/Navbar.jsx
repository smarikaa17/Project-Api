import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='bg-[#fff2d0] flex justify-evenly items-center h-10'>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
    </nav>
  )
}

export default Navbar