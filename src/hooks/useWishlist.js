import { useDispatch } from "react-redux";
import {
    addToWishlist,
    removeFromWishlist,
} from "../features/wishlist/wishlistSlice";
import { useToast } from "../context/ToastContext"; // Assuming you have this Toast context
import { ToastType } from "../constants/enums/toastTypes"; // Assuming you have these enums

const useWishlist = () => {
    const dispatch = useDispatch();
    const { showToast } = useToast();

    const handleAddToWishlist = (service) => {
        try {
            dispatch(addToWishlist(service)); // Dispatching add action for wishlist
            showToast(
                ToastType.SUCCESS,
                "Service added to wishlist!",
                "You have successfully added the service to your wishlist. You can review it later or add it to your cart."
            );
        } catch (error) {
            showToast(
                ToastType.ERROR,
                "Error adding to wishlist!",
                "An error occurred while adding the item to your wishlist."
            );
        }
    };

    const removeServiceFromWishlist = (serviceId) => {
        dispatch(removeFromWishlist(serviceId)); // Dispatching remove action for wishlist
        showToast(
            ToastType.SUCCESS,
            "Service removed from wishlist!",
            "You have successfully removed the service from your wishlist."
        );
    };

    return { handleAddToWishlist, removeServiceFromWishlist };
};

export default useWishlist;
