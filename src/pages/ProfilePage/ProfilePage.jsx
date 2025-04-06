import React from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
    const userData = useSelector((state) => state.auth.user);
    return (
        <div className="bg-gray-100 flex items-center justify-center py-30">
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-3xl">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-[#6b4f36]">
                        User Profile
                    </h2>
                    <button className="bg-[#6b4f36] text-white px-4 py-2 rounded-md hover:bg-[#5a412d] transition">
                        Edit Profile
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="text-sm text-gray-600">
                            Username
                        </label>
                        <div className="p-2 border rounded-md">
                            {userData?.username}
                        </div>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <div className="p-2 border rounded-md">
                            {userData?.email}
                        </div>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">
                            First Name
                        </label>
                        <div className="p-2 border rounded-md">
                            {userData?.firstName || "—"}
                        </div>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">
                            Last Name
                        </label>
                        <div className="p-2 border rounded-md">
                            {userData?.lastName || "—"}
                        </div>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Mobile</label>
                        <div className="p-2 border rounded-md">
                            {userData?.mobile || "—"}
                        </div>
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Address</label>
                        <div className="p-2 border rounded-md">
                            {userData?.address || "—"}
                        </div>
                    </div>
                </div>

                {userData?.profile && (
                    <div className="mt-6 text-center">
                        <img
                            src={userData?.profile}
                            alt="Profile"
                            className="w-32 h-32 mx-auto rounded-full border-4 border-[#6b4f36]"
                        />
                        <p className="mt-2 text-[#6b4f36] font-medium">
                            {userData?.username}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
