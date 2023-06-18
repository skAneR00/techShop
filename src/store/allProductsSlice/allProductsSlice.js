import { createSlice } from '@reduxjs/toolkit'

export const allProducts = createSlice({
    name: 'allProducts',
    initialState: {
        allProducts: []
    },
    reducers: {
        setAllProducts: (state, action) => {
            state.allProducts = action.payload
        },
        addAllProducts: (state, action) => {
            state.allProducts.push(action.payload);
        },
        removeAllProducts: (state, action) => {
            const productID = action.payload;
            state.allProducts = state.allProducts.filter(
                (product) => product.id !== productID
            );
        }
    },
})

export const { setAllProducts } = allProducts.actions

export default allProducts.reducer