import { createSlice } from '@reduxjs/toolkit';

export const bagProducts = createSlice({
    name: 'bagProducts',
    initialState: {
        bagProducts: [],
    },
    reducers: {
        setBagProducts: (state, action) => {
            console.log(action.payload);
            state.bagProducts.push(action.payload);
        },
        removeBagProduct: (state, action) => {
            const productID = action.payload;
            state.bagProducts = state.bagProducts.filter(
                (product) => product.ID !== productID
            );
        },
        addBagProduct: (state, action) => {
            const product = action.payload;
            state.bagProducts.push(product);
        },
    },
});

export const { setBagProducts, removeBagProduct, addBagProduct } = bagProducts.actions;

export default bagProducts.reducer;
