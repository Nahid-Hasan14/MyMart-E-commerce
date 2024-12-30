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

export default store;