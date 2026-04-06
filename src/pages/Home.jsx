import React, { useEffect, useState } from 'react'
import { getproducts } from '../services/api'
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { setProductsList } from '../store/ProductsSlice';

const Home = () => {
  const productsList=useSelector((store)=>store?.product?.productList);
  const FilteredproductsList=useSelector((store)=>store?.product?.filteredProductsList);
  console.log("this is ",productsList)
  const dispatch=useDispatch();
  const fetchproducts=async()=>{ 
    const res=await getproducts(`product`); 
     dispatch(setProductsList(res?.data?.products));
     setLoading(false)
    //ctrl+f garesi tyo work find garxa and we can replace their occurences
  }
    const [loading, setLoading] = useState(true)

  useEffect(() => {
   fetchproducts();
  }, [])
  
  return (
    <div>
    { loading?(
      <div className='flex justify-center items-center gap-3'>
      <div className='animate-spin border-4 h-10 w-10 rounded-full border-t-transparent border-[#c8a96e] '></div>
      <p className=' uppercase text-pink-500 text-lg font-semibold'>Loading</p>
      </div>
    ) :(
    <>
    <div className='flex justify-around bg-[#f2f2f2]'>
    <div className="grid grid-cols-5">
  {
    FilteredproductsList.length !== 0
      ? FilteredproductsList.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))
      : productsList.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))
  }
</div>
</div>
    </>
  )
}
    </div>
        
  )
}

export default Home