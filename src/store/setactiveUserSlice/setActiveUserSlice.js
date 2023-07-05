import { createSlice } from '@reduxjs/toolkit'

export const activeUser = createSlice({
    name: 'activeUser',
    initialState: {
        activeUser: {}
    },
    reducers: {
        setActiveUser: (state, action) => {
            state.activeUser = action.payload;
        },
        setAddress: (state, action) => {
            state.activeUser.addresses.push(action.payload);
        },
        setPaymentMethod: (state, action) => {
            state.activeUser.paymentMethods.push(action.payload);
        },
        removePaymentMethod: (state, action) => {
            let i = 0;
            state.activeUser.paymentMethods.map((item) => {
                if(item.cardNum == action.payload){
                    state.activeUser.paymentMethods.splice(i, 1);
                }
                i++;
            })
        },
        removeAddress: (state, action) => {
            // let i = 0;
            // state.activeUser.addresses.map((item) => {
            //     if (item.street == action.payload) {
            //         state.activeUser.addresses.splice(i, 1);
            //     }
            //     i++;
            // })
            state.activeUser.addresses.splice(action.payload, 1);
        }
    },
})

export const { setActiveUser, setAddress, setPaymentMethod, removePaymentMethod, removeAddress } = activeUser.actions

export default activeUser.reducer