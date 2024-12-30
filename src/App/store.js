import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/ProductsSlice";
import cartReducer from "../features/CartSlice";
import  addressReducer  from "../features/AddressSlice";

const store = configureStore({
    reducer: {
        productsList: productsReducer,
        cartItemsList: cartReducer,
        addressList: addressReducer
    }
})

store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem("cartData", JSON.stringify(state.cartItemsList.carts));
})
export default store;