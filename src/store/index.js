import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import wishlistReducer from "../features/wishlist/wishlistSlice";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,
    },
});

export default store;
