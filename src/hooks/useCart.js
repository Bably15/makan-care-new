import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useToast } from "../context/ToastContext";
import { ToastType } from "../constants/enums/toastTypes";

const useCart = () => {
    const dispatch = useDispatch();
    const { showToast } = useToast();

    const handleAddToCart = (service) => {
        try {
            dispatch(addToCart(service));
            showToast(
                ToastType.SUCCESS,
                "Service added to cart!",
                "You have successfully added the service to your cart. Proceed to checkout or continue browsing."
            );
        } catch (error) {
            if (error.message === "Item already in cart") {
                showToast(
                    ToastType.ERROR,
                    "Already in Cart!",
                    "This item is already in your cart. Adjust the quantity from the cart page if needed."
                );
            }
        }
    };

    return { handleAddToCart };
};

export default useCart;
