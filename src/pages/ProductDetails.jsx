import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getproducts } from '../services/api';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductDetails = () => { 
  const dispatch= useDispatch();
  const {id}=useParams();  //this is called object destructuring 
  const getproductdetails=async()=>{
    const response=await getproducts(`product/${id}`); 
     setProduct(response?.data)
     setloading(false)
  } 

  const [product, setProduct] = useState({})
  const [loading, setloading] = useState(true)
 

 useEffect(() => {
   getproductdetails();
  }, [])
  
  return (
    <div className='flex justify-center  bg-[#f2f2f2] h-screen '>
      {loading?(
        <div className=" flex items-center justify-center gap-3">
          <div className="w-10 h-10 border-4 border-[#c8a96e] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-pink-500 text-sm font-medium  uppercase">Loading product...</p>
        </div>
      ):(
        <div className=" bg-white flex items-center justify-center px-6 ">
      <div className=" w-[65rem] flex flex-row h-[35rem]">

        <div className="w-2/5 border-2 flex flex-col items-center justify-center p-10 relative">

          <span className={`absolute top-5 left-5 font-semibold text-sm px-3 py-1 rounded-full  
          ${
            product.availabilityStatus === 'In Stock'
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-600'
          }`}>
            {product.availabilityStatus}
          </span>

          {product.discountPercentage && (
            <span className="absolute top-5 right-5 text-sm font-bold px-3 py-1 rounded-full bg-pink-400 text-white">
              {product.discountPercentage}% OFF
            </span>
          )}

          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-64 h-64"
          />
        </div>
        <div className="w-3/5 p-8 overflow-auto  flex flex-col gap-5">
          <span className=" uppercase text-sm text-[#c8a96e] font-semibold">
            {product.category}
          </span>

          <h1 className="text-2xl font-bold text-black">
            {product.title}
          </h1>

          <div className="flex items-center justify-between">
            <p className="font-semibold text-[#433b32] ">
              by {product.brand}
            </p>
            <div className=" border border-yellow-600 rounded-full px-3 py-1 text-sm font-semibold">⭐{product.rating}
            </div>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-pink-500">${product.price}</span>
            {product.discountPercentage && (
              <span className="text-sm text-[#433b32]  line-through">
                ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
              </span>
            )}
          </div>

          <p className="text-[#5e5044]  border-t  pt-4">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-3 border-t border-[#f2f2f2] pt-4">
            {[
              { label: 'Stock', value: product.stock },
              { label: 'Min. Order', value: product.minimumOrderQuantity },
              { label: 'Weight', value: product.weight ? `${product.weight} kg` : '-' },
              { label: 'SKU', value: product.sku },
              { label: 'Dimensions', value: product.dimensions ? `${product.dimensions.width} × ${product.dimensions.height} × ${product.dimensions.depth} cm` : '-' },
              { label: 'Shipping', value: product.shippingInformation },
            ].map(({ label, value }) => (
              <div key={label} className="bg-[#f2f2f2] rounded-xl p-3">
                <p className="text-xs text-[#a89070] uppercase  mb-1">{label}</p>
                <p className="text-sm font-semibold text-[#2b2418]">{value}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2 border-t text-sm text-[#5e5044] border-[#ede8df] pt-4">
              <span>{product.returnPolicy}</span>
              <span>{product.warrantyInformation}</span>
          </div>

          <button onClick={(e)=>{
            e.stopPropagation()
            dispatch(addToCart(product))
          }} className="mt-2 w-full hover:text-pink-500 border-2 border-yellow-600 active:bg-pink-300 active:text-white text-[#433b32] font-bold py-3 rounded-2xl text-sm uppercase">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
)}
       </div> 
  )
}

export default ProductDetails


