import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increaseQty, removeFromCart } from "../store/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from '../assets/emptycart.json'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items);
  const navigate= useNavigate();
  const [selectId, setSelectId] = useState([])

  const allSelected= cartItem.length>0 && selectId.length===cartItem.length

  const handleSelectAll=()=>{
    if(allSelected)
      setSelectId([])
    else
      setSelectId(cartItem.map((item)=>item.id))
  }

  const handleSelectEach=(id)=>{
     if(selectId.includes(id))
        setSelectId(selectId.filter((sid)=>sid!==id))
      else
        setSelectId([...selectId,id])
  }

  const handleDelete=()=>{
    selectId.forEach((id)=>dispatch(removeFromCart(id)))
    setSelectId([])
  }
  return (
    
    <div className="bg-[#f2f2f2] flex flex-col items-center gap-2 py-2">
      {cartItem.length === 0 ? ( 
        <div className="flex flex-col justify-center items-center gap-2 ">
          <Player 
           src={animationData} loop={true} autoplay className='w-56 '
           />
        <p className="text-lg">Your Cart is Empty</p>
        <p className="text-base">Looks like you haven't added anything yet.</p>
        <button onClick={()=>{navigate('/')}} className="border-2 rounded-lg px-2 py-1 border-yellow-600  text-sm font-semibold hover:text-pink-500">Start shopping!</button>
        </div>
        
      ) : (
     <div>
       <div className="uppercase flex justify-between items-center border-2 w-[45rem] mx-12 h-11 p-3 my-2 rounded-lg bg-white">
        <div className=" flex items-center  gap-2">
        <button onClick={handleSelectAll}
        style={{backgroundColor: allSelected?"pink":"white"}}
        className="w-7 border-2 h-6">
          <FontAwesomeIcon
          icon={ allSelected? faCheck : null}
          size="l"
          color="white"
          />
        </button>
      <div className="text-sm">Select all</div>
      </div>
        <button onClick={handleDelete}
        disabled={selectId.length === 0}
        className="hover:text-red-600 disabled:opacity-30">
          <FontAwesomeIcon  icon={faTrashCan} />Delete
        </button>
      </div>
      {
        cartItem.map((item) => (
          <div
            key={item.id}
            className="flex  border-2 rounded-lg w-[45rem] mx-12 p-3 my-2 bg-white "
          >
            <div className="flex gap-3 ">
            <div className="flex items-center gap-2">
              <button onClick={()=>handleSelectEach(item.id)}
               style={{backgroundColor:(selectId.includes(item.id))?"pink":"white"}}
               className="w-7 border-2 h-6">
              <FontAwesomeIcon
              icon={ (selectId.includes(item.id))? faCheck : null}
              size="l"
              color="white"
              /></button>
              </div>
              <div className="flex w-[41rem]">
             <img className="border-r-2 border-l-2 h-32" src={item.thumbnail} />
             <div className="flex flex-col justify-around w-full px-4">
              <div className="border-2 rounded-lg w-14  border-yellow-600  text-sm font-semibold ">
                ⭐{item.rating}
              </div>
              <div className="flex flex-col justify-center ">
                <h1>{item.title}</h1>
                <div className="flex justify-between p-2 pr-0 ">
                  <p className="w-14 text-pink-500 font-semibold">
                    ${item.price}
                  </p>
                  <div className="flex justify-between  w-28">
                    <div className=" flex justify-evenly w-16">
                      <button
                        onClick={() => dispatch(decreaseQty(item.id))}
                        className="bg-[#f2f2f2] w-6 hover:bg-pink-300 "
                      >
                        -
                      </button>
                      <span className="w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => dispatch(increaseQty(item.id))}
                        className="bg-[#f2f2f2] w-6  hover:bg-pink-300"
                      >
                        +
                      </button>
                    </div> 
                    <button onClick={()=>{dispatch(removeFromCart(item.id))}}>
                      <FontAwesomeIcon className="hover:text-red-600" icon={faTrashCan} />
                    </button>
                  </div>
                </div>
              </div>
           </div>
           </div>
            </div>
          </div>
        ))
      }</div>
      )}
      
    </div>
  
  );
};

export default Cart;
