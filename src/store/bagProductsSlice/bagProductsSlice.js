import { createSlice } from '@reduxjs/toolkit';

export const bagProducts = createSlice({
    name: 'bagProducts',
    initialState: {
        bagProducts: [],
    },
    reducers: {
        setBagProducts: (state, action) => {
            const existingProduct = state.bagProducts.find(
                item =>
                    item.productName === action.payload.productName &&
                    item.productColor === action.payload.productColor
            );

            if (existingProduct) {
                existingProduct.productCount++;
            } else {
                state.bagProducts.push(action.payload);
            }
        },
        removeBagProduct: (state, action) => {
            const productID = action.payload;
            state.bagProducts.map((item) => {
                if (item.id == productID && item.productCount > 1) {
                    item.productCount--
                }
                else if (item.id == productID && item.productCount == 1) {
                    state.bagProducts = state.bagProducts.filter(
                        (product) => product.id !== productID
                    );
                }
            })
        },
    },
});

export const { setBagProducts, removeBagProduct } = bagProducts.actions;

export default bagProducts.reducer;
