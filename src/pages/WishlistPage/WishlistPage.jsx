import React from "react";
import { useSelector } from "react-redux";
import WishlistItem from "../../components/WishlistItem/WishlistItem";
import { COMMON_CONSTANTS } from "../../constants/common/commonConstants";
import { useNavigate } from "react-router-dom";
import { APPROUTES } from "../../constants/routes/appRoutes";

const WishlistPage = () => {
    const wishlistData = useSelector((state) => state.wishlist);
    const navigate = useNavigate();

    return (
        <div className="max-w-4xl mx-auto py-20">
            <h2 className="text-2xl font-bold mb-10">
                My Wishlist{" "}
                <span className="text-gray-500">
                    ({wishlistData?.items?.length} items)
                </span>
            </h2>
            {wishlistData?.items?.map((service) => (
                <WishlistItem key={service.id} service={service} />
            ))}
            {wishlistData?.items?.length === 0 && (
                <p className="text-gray-500">Your wishlist is empty!</p>
            )}
        </div>
    );
};

export default WishlistPage;
