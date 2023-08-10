import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


//* because api have objects {data, errors, status}
const initialState = {
    data: [],
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}, 
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})


export const {fetchProducts} = productsSlice.actions
export default productsSlice.reducer

export const getProducts = createAsyncThunk('products/get', async () => {
    const result = await axios.get("https://api.escuelajs.co/api/v1/products")
    return result.data
})  