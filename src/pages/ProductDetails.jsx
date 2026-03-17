import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getproducts } from '../services/api';

const ProductDetails = () => { 
  
  const {id}=useParams();  //this is called object destructuring 
  console.log("this is idddd",id)
  const getproductdetails=async()=>{
    const response=await getproducts(`product/${id}`); 
    console.log("response",response);
  }

 useEffect(() => {
   getproductdetails();
  }, [])
  
  return (
    <div>ProductDetails</div> 
  )
}

export default ProductDetails


