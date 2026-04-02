import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'
import {  useNavigate  } from 'react-router-dom'

const ProductCard = ({data}) => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  return (
    <div className='hover:scale-105 cursor-pointer' onClick={()=>navigate(`/products/${data?.id}`)}>
    <div className='flex flex-col justify-evenly w-56  border rounded-md  bg-white p-2 m-3'>
      <div className='border-2 rounded-lg px-2 py-1 w-16 border-yellow-600  text-sm font-semibold '>⭐{data.rating}</div>
    <img src={data.thumbnail}></img>
    <h1 className='h-12 '>{data.title}</h1>
    <div className='flex flex-row justify-around gap-8'>
    <div className=' border-2 rounded-lg px-2 text-pink-500 font-semibold'>${data.price}</div>
    <button onClick={(e)=>{
      e.stopPropagation()
      dispatch(addToCart(data))
      
    }} 
    className='border-2 rounded-lg px-2 text-[#434242] active:bg-pink-400 active:text-white hover:text-pink-500 font-semibold'>Add to cart</button>
    </div>
    </div>
    </div>
  )
}

export default ProductCard