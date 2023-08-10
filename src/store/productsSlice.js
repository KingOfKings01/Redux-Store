import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"


//* because api have objects {data, errors, status}
const initialState = {
    data: [],
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        fetchProducts(state, action){
            state.data = action.payload
        }
    }
})


export const {fetchProducts} = productsSlice.actions
export default productsSlice.reducer

export function getProducts(){
    return async function getProductsThunk(dispatch, getState){
        const result = await axios.get("https://api.escuelajs.co/api/v1/products")

        dispatch(fetchProducts(result.data))
    }
}      