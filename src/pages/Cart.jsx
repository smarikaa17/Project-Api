import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cartItem= useSelector(state=>state.cart.items)
  return (
      <div className='bg-[#f2f2f2]  '>{cartItem.length===0?(<p>Cart is Empty</p>):(cartItem.map((item) =>(
        <div key={item.id} className='flex border-2 rounded-lg w-96 mx-12 bg-white '>
        <img className='border-r-2 h-28' src={item.thumbnail}/>
        <div className='flex flex-col justify-around px-4'>
         <div className='border-2 rounded-lg w-14  border-yellow-600  text-sm font-semibold '>⭐{item.rating}</div>
        <div className='flex flex-col justify-center '>
        <h1>{item.title}</h1>
        <p>$ {item.price}</p>
        </div>
        </div>
        </div>
      )))
      }</div>
    
  )
}


export default Cart