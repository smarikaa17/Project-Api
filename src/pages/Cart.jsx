import { useDispatch, useSelector } from "react-redux";
import { decreaseQty, increaseQty, removeFromCart } from "../store/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from '../assets/emptycart.json'
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items);
  const navigate= useNavigate();

  return (
    
    <div className="bg-[#f2f2f2] flex flex-wrap justify-center gap-2 py-2">
      {cartItem.length === 0 ? (
        <div className="h-screen">
        <div className="flex flex-col justify-center items-center gap-2 ">
          <Player 
           src={animationData} loop={true} autoplay className='w-60 '
           />
        <p className="text-lg">Your Cart is Empty</p>
        <p className="text-base">Looks like you haven't added anything yet.</p>
        <button onClick={()=>{navigate('/')}} className="border-2 rounded-lg px-2 py-1 border-yellow-600  text-sm font-semibold hover:text-pink-500">Start shopping!</button>
        </div>
        </div>
      ) : (
     
        cartItem.map((item)=> (
          <div
            key={item.id}
            className="flex  border-2 rounded-lg w-[42rem] mx-12 bg-white "
          >
            <img className="border-r-2 h-32" src={item.thumbnail} />
            <div className="flex flex-col justify-around w-full px-4">
              <div className="border-2 rounded-lg w-14  border-yellow-600  text-sm font-semibold ">
                ⭐{item.rating}
              </div>
              <div className="flex flex-col justify-center ">
                <h1>{item.title}</h1>
                <div className="flex justify-between p-2 ">
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
        ))
      )}
    </div>
  
  );
};

export default Cart;
