import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cartSlice"
import ProductReducer from "./ProductsSlice"
export const store= configureStore({
    reducer: {
        cart: cartReducer,
        product:ProductReducer
    }
})