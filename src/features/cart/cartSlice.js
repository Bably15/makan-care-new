import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                throw new Error("Item already in cart");
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
                state.totalQuantity += 1;
                state.totalPrice += action.payload.price;
            }
        },
        removeFromCart: (state, action) => {
            const itemIndex = state.items.findIndex(
                (item) => item.id === action.payload
            );
            if (itemIndex !== -1) {
                state.totalQuantity -= state.items[itemIndex].quantity;
                state.totalPrice -= state.items[itemIndex].quantity;
                state.items.splice(itemIndex, 1);
            }
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
