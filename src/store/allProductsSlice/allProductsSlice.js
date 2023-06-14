import { createSlice } from '@reduxjs/toolkit'

export const allProducts = createSlice({
    name: 'allProducts',
    initialState: {
        allProducts: []
    },
    reducers: {
        setAllProducts: (state, action) => {
            state.allProducts = action.payload
        }
    },
})

export const { setAllProducts } = allProducts.actions

export default allProducts.reducer