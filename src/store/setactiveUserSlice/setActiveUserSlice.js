import { createSlice } from '@reduxjs/toolkit'

export const activeUser = createSlice({
    name: 'activeUser',
    initialState: {
        activeUser: {}
    },
    reducers: {
        setActiveUser: (state, action) => {
            console.log(action.payload);
            state.activeUser = action.payload;
        }
    },
})

export const { setActiveUser } = activeUser.actions

export default activeUser.reducer