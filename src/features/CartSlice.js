import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    carts: []
}

export const cartSlice = createSlice({
    name: "allCarts",
    initialState,
    reducers: {
       
        //Add carts and Increment
        addToCart: (state, action)=> {
            const findItem = state.carts.find((item)=> item.id === action.payload.id)
            console.log("Updated cart:", [...state.carts]);
            if (findItem){
                findItem.quantity +=1
            } else {
                state.carts.push({...action.payload, quantity: 1})
            }
           
        },
        //Decrement
        decrementCart : (state, action)=> {
           const findItemDec = state.carts.find((item)=> item.id === action.payload.id)
           if(findItemDec.quantity > 1){
               findItemDec.quantity -= 1
           }
        },
        //Remove a Signle Cart
        removeCart: (state, action) => {
            state.carts = state.carts.filter((item)=> item.id !== action.payload)
        },

        //All Carts Remove
        clearAllCarts: (state) =>{
            state.carts = []
        },
        setCartsFromLocalStorage: (state, action) => {
            state.carts = action.payload;
        }
    }
})
export const {addToCart, decrementCart, removeCart, clearAllCarts, setCartsFromLocalStorage}= cartSlice.actions
export default cartSlice.reducer