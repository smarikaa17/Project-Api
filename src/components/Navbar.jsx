import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CategoryList } from "../utils/constants";
import { filterProducts } from "../store/ProductsSlice";

const Navbar = () => {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0),
  );
  const dispatch=useDispatch();
  const productslist=useSelector((store)=>store?.product?.productList);
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    setCategory(e.target.value);
    const filteredList=productslist.filter((item)=>item?.category==e.target.value.toLowerCase());
    console.log(filteredList,e.target.value)
    dispatch(filterProducts(filteredList));
  };
  return (
    <nav className="bg-[#e7d5a7]  text-[#434242] flex justify-evenly items-center h-14 font-semibold text-xl sticky top-0 z-50">
      <Link to="/" className="hover:text-pink-500">
        Home
      </Link>

      <div className="flex ">
        <select value={category} onChange={handleChange}>
          <option value={''}>All categories</option>
          {CategoryList.map((item,index)=>
          <option key={index}  value={item}>{item}</option> 
          )}
        </select>
      </div>
      <Link to="/cart" className="hover:text-pink-500 relative">
        cart
        {cartCount > 0 && (
          <span className="absolute -top-3 -right-4 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
