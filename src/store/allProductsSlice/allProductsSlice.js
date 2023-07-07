import { createSlice } from '@reduxjs/toolkit'

export const allProducts = createSlice({
    name: 'allProducts',
    initialState: {
        allProducts: []
    },
    reducers: {
        // Добавление всех продуктов в state
        setAllProducts: (state, action) => {
            state.allProducts = action.payload
        },
        // Добавление продукта
        addAllProducts: (state, action) => {
            state.allProducts.push(action.payload);
        },
        // Удаление Определенного продукта с помощью obj.filter()
        removeAllProducts: (state, action) => {
            const productID = action.payload;
            state.allProducts = state.allProducts.filter(
                (product) => product.id !== productID
            );
        }
    },
})

export const { setAllProducts, addAllProducts, removeAllProducts } = allProducts.actions

export default allProducts.reducer