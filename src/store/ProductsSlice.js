import { createSlice } from "@reduxjs/toolkit";

const   initialState={
        productList:[],
        filteredProductsList:[]
    };
const ProductsSlice=createSlice({
    name:"Products",
  initialState,
    reducers:{
         setProductsList:(state,action)=>{
           state.productList=action.payload;
         },
         filterProducts:(state,action)=>{
          state.filteredProductsList=action.payload;
         },
         clearSlice:()=>initialState
    }
})
export const {setProductsList,clearSlice,filterProducts}=ProductsSlice.actions;
export default ProductsSlice.reducer;

