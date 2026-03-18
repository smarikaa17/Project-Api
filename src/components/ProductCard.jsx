import React from 'react'
import Home from '../pages/Home'
const ProductCard = ({data}) => {
  return (
    <div className='flex flex-col w-56 border-4 border-blue-300 p-2 m-3'>
    <img src={data.thumbnail}></img>
    <h1>{data.title}</h1>
    <div>{data.price}</div>
    </div>
  )
}

export default ProductCard