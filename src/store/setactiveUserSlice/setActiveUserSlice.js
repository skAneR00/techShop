import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const activeUser = createSlice({
    name: 'activeUser',
    initialState: {
        activeUser: {},
    },
    reducers: {
        setActiveUser: (state, action) => {
            state.activeUser = action.payload;
        },
        setAddress: (state, action) => {
            state.activeUser.addresses.push(action.payload);

            axios.put(`https://64467aa1ee791e1e2900569a.mockapi.io/api/store/users/${state.activeUser.id}`, { "addresses": state.activeUser.addresses })
                .catch((err) => console.log(err))
        },
        setPaymentMethod: (state, action) => {
            state.activeUser.paymentMethods.push(action.payload);

            axios.put(`https://64467aa1ee791e1e2900569a.mockapi.io/api/store/users/${state.activeUser.id}`, { "paymentMethods": state.activeUser.paymentMethods })
                .catch((err) => console.log(err))
        },
        removePaymentMethod: (state, action) => {
            let i = 0;
            state.activeUser.paymentMethods.map((item) => {
                if(item.cardNum == action.payload){
                    state.activeUser.paymentMethods.splice(i, 1);
                }
                i++;
            })

            axios.put(`https://64467aa1ee791e1e2900569a.mockapi.io/api/store/users/${state.activeUser.id}`, { "paymentMethods": state.activeUser.paymentMethods })
                .catch((err) => console.log(err))
        },
        removeAddress: (state, action) => {
            if(state.activeUser.addresses[action.payload].active){
                state.activeUser.addresses.splice(action.payload, 1);
                state.activeUser.addresses[0].active = true;
            }
            state.activeUser.addresses.splice(action.payload, 1);

            axios.put(`https://64467aa1ee791e1e2900569a.mockapi.io/api/store/users/${state.activeUser.id}`, { "addresses": state.activeUser.addresses })
                .catch((err) => console.log(err))
        },
        setActiveAdress: (state, action) => {
            state.activeUser.addresses.map((item) => item.active = false)
            state.activeUser.addresses[action.payload].active = true; 

            axios.put(`https://64467aa1ee791e1e2900569a.mockapi.io/api/store/users/${state.activeUser.id}`, { "addresses": state.activeUser.addresses })
                .catch((err) => console.log(err))
        },
        setActiveCard: (state, action) => {
            state.activeUser.paymentMethods.map((item) => item.active = false)
            state.activeUser.paymentMethods[action.payload].active = true; 

            axios.put(`https://64467aa1ee791e1e2900569a.mockapi.io/api/store/users/${state.activeUser.id}`, { "paymentMethods": state.activeUser.paymentMethods })
                .catch((err) => console.log(err))
        }
    },
})

export const { setActiveUser, setAddress, setPaymentMethod, removePaymentMethod, removeAddress, setActiveAdress, setActiveCard } = activeUser.actions

export default activeUser.reducer