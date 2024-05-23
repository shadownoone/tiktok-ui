import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: '',
    isLogin: false,
};

export const accountSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        userLogin: (state, action) => {
            state.userInfo = action.payload;
            state.isLogin = true;
        },

        userLogout: (state, action) => {
            state.userInfo = '';
            state.isLogin = false;
        },

        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { userLogin, userLogout, increment, decrement, incrementByAmount } = accountSlice.actions;

export default accountSlice.reducer;
