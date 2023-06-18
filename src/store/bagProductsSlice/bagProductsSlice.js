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
                (product) => product.id !== productID
            );
        },
    },
});

export const { setBagProducts, removeBagProduct } = bagProducts.actions;

export default bagProducts.reducer;
