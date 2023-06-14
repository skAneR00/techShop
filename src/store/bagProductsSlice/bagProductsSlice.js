import { createSlice } from '@reduxjs/toolkit'

export const bagProducts = createSlice({
    name: 'bagProducts',
    initialState: {
        bagProducts: []
    },
    reducers: {
        setBagProducts: (state, action) => {
            console.log(action.payload);
            state.bagProducts.push(action.payload)
        }
    },
})

export const { setBagProducts } = bagProducts.actions

export default bagProducts.reducer