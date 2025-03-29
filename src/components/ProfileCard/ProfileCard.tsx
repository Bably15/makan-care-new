import React from "react";

const ProfileCard = ({ image, name, role }) => {
    return (
        <>
            <div className="bg-white rounded-xl p-4 border border-gray-200">
                <img
                    src={image}
                    alt={name}
                    className="w-full rounded-xl object-cover"
                />
                <h3 className="mt-4 text-gray-900">{name}</h3>
                <p className="text-gray-500">{role}</p>
            </div>
        </>
    );
};

export default ProfileCard;
