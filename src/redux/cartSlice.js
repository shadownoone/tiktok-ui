// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find(
                (item) => item.id === action.payload.id && item.selectedSize === action.payload.selectedSize,
            );
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        updateSize: (state, action) => {
            const { id, size } = action.payload;
            const item = state.cart.find((item) => item.id === id);
            if (item) {
                item.selectedSize = size;
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },
        removeItem: (state, action) => {
            const { id, size } = action.payload;
            state.cart = state.cart.filter((item) => !(item.id === id && item.selectedSize === size));
        },
    },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem, updateSize } = cartSlice.actions;
