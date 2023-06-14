import { configureStore } from '@reduxjs/toolkit'
import allProductsSlice from './allProductsSlice/allProductsSlice'
import bagProductsSlice from './bagProductsSlice/bagProductsSlice'
import setActiveUserSlice from './setactiveUserSlice/setActiveUserSlice'

export default configureStore({
    reducer: {
        allProducts: allProductsSlice,
        bagProducts: bagProductsSlice,
        activeUser: setActiveUserSlice

    },
})