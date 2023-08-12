import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


//* because api have objects {data, errors, status}
const initialState = {
    data: [],
    status: 'idle'
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}, 
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.data = action.payload
            state.status = 'idle'
        })
        .addCase(getProducts.rejected, (state) => {
            state.status = "error"
        })
    }
})


export const {fetchProducts} = productsSlice.actions
export default productsSlice.reducer

export const getProducts = createAsyncThunk('products/get', async () => {
    const result = await axios.get("https://api.escuelajs.co/api/v1/products") //? https://fakestoreapi.com/products
    return result.data
})  