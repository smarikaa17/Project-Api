import React, { useEffect } from 'react'
import { getproducts } from '../services/api'
const Home = () => {
  
  const fetchproducts=async()=>{ 
    const res=await getproducts(`product`); 
    console.log(res,"this is the response , suck my dick you baby.")

    //ctrl+f garesi tyo work find garxa and we can replace their occurences
  }


  useEffect(() => {
   fetchproducts();
  }, [])
  
  return (
    <>
    <div className='h-screen bg-[#f4adad]'>
    <div> this is Home</div>
    </div>
    </>
  )
}

export default Home