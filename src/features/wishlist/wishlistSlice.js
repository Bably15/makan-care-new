import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (existingItem) {
                throw new Error("Item already in cart");
            } else {
                state.items.push(action.payload); // Adding item to wishlist
                state.totalQuantity += 1;
                state.totalPrice += action.payload.price;
            }
        },
        removeFromWishlist: (state, action) => {
            const itemIndex = state.items.findIndex(
                (item) => item.id === action.payload
            );
            if (itemIndex !== -1) {
                state.totalQuantity -= 1;
                state.totalPrice -= state.items[itemIndex].price;
                state.items.splice(itemIndex, 1); // Removing item from wishlist
            }
        },
    },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
