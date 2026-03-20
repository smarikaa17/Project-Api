import React, { useEffect, useState } from 'react'
import { getproducts } from '../services/api'
import ProductCard from '../components/ProductCard';
const Home = () => {
  const [products,setProducts] = useState([]); 
  const fetchproducts=async()=>{ 
    const res=await getproducts(`product`); 
     setProducts(res?.data?.products)

    //ctrl+f garesi tyo work find garxa and we can replace their occurences
  }

  useEffect(() => {
   fetchproducts();
  }, [])
  
  return (
    <>
    <div className='flex justify-around bg-[#f2f2f2]'>
    <div className=' grid grid-cols-5'>{products.map((item)=>(<ProductCard key={item.id} data={item}/>))} </div>
    </div>
    </>
        
  )
}

export default Home