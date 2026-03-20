import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navbar = () => {
  const cartCount = useSelector(state => state.cart.items.length)
  return (
    <nav className='bg-[#e7d5a7]  text-[#434242] flex justify-evenly items-center h-14 font-semibold text-xl'>
        <Link to="/"  className='hover:text-pink-500'>Home</Link>
        <Link to="/cart" className='hover:text-pink-500 relative'>cart{cartCount > 0 && (
        <span className='absolute -top-3 -right-4 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>{cartCount}</span>)}</Link>
    </nav>
  )
}

export default Navbar