import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    items:[] //but this state is a global state that can be accessed within the app
    //api lai both state or store ma rakhna milxa but kaha use garney case ma farak parxa
}

//slice of the store

export const cartSlice= createSlice({
  name:"cart",
  initialState,
  reducers: {
    addToCart:(state,action)=>{
      const existing = state.items.find((item)=>item.id === action.payload.id)
      if(existing){
       existing.quantity += 1
      }
      else{
      state.items.push({...action.payload, quantity:1})
      }
    },
    increaseQty:(state,action)=>{
        const item= state.items.find((item)=>item.id=== action.payload)
          if(item)
            item.quantity +=1
        },
     decreaseQty: (state, action) => {
      const item = state.items.find(item => item.id === action.payload)
      if (item) {
        if (item.quantity === 1) {
          state.items = state.items.filter(item => item.id !== action.payload)
        } else {
          item.quantity -= 1
        }
      }
    }, 
    removeFromCart:(state,action)=>{
     state.items = state.items.filter(item => item.id !== action.payload)
    }  
    },
  }
)

export const {addToCart,increaseQty,decreaseQty,removeFromCart}= cartSlice.actions;

export default cartSlice.reducer;