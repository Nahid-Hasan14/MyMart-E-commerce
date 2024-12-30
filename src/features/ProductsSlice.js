import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fatchProducts = createAsyncThunk('products/fatchProducts', async( url ) => {
    const response = await axios.get(url)
    console.log("Data response successfully", response.data)
    return response.data;
})


export const productsSlice = createSlice({
    name: "getProducts",
    initialState: {products:"", loading:false, error: null},
    reducers: {},
    extraReducers:( builder) =>{
        builder 
             .addCase(fatchProducts.pending, (state)=>{
                state.loading= true;
                state.error= null;
             })
             .addCase(fatchProducts.fulfilled, (state,action)=>{
                console.log("Data received:", action.payload);
                state.loading = false;
                state.products = action.payload;
             })
             .addCase(fatchProducts.rejected, (state, action)=>{
                state.loading = false;
                state.error = action.error.message
                console.log("Error:", action.error?.message)
             })
    } 
    
    
})

export default productsSlice.reducer;





// http://localhost/halalfood/api/product?page_no=1&limit=20