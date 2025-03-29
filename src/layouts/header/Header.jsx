import React from "react";
import { Link } from "react-router-dom";

import LOGO from "../../assets/logo.png";
import CART_ICON from "../../assets/cart.png";
import HEART_ICON from "../../assets/heart.png";
import SHARED_ICON from "../../assets/SHARED.png";
import Dropdown from "../../components/dropdown/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ROCKET_IMG from "../../assets/inter-logo.png";

const languageItems = [
    { iconBefore: <span>🇺🇸</span>, text: "English" },
    { iconBefore: <span>🇫🇷</span>, text: "French" },
    { iconBefore: <span>🇩🇪</span>, text: "German" },
    { iconBefore: <span>🇪🇸</span>, text: "Spanish" },
    { iconBefore: <span>🇮🇳</span>, text: "Hindi" },
    { iconBefore: <span>🇯🇵</span>, text: "Japanese" },
];
const currencyItems = [{ text: "USD" }, { text: "Saudi Riyal" }];
const shopByCategoryItems = [
    { iconBefore: <span>≡</span>, text: "SHOP BY CATEGORIES" },
];

const Header = () => {
    return (
        <>
            <div className="w-full hidden sm:block">
                <div className="max-w-7xl mx-auto p-4">
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full px-2">
                            <ul className="list-none flex flex-nowrap justify-end">
                                <li className="mx-2">
                                    <Link to={"/help-center"}>Help Center</Link>
                                </li>
                                <li className="mx-2">
                                    <Link to={"/help-center"}>
                                        Order Tracking
                                    </Link>
                                </li>
                                <li className="mx-2">
                                    <Dropdown items={languageItems} />
                                </li>
                                <li className="mx-2">
                                    <Dropdown items={currencyItems} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full hidden sm:block border-y-1 border-gray-200 relative">
                <div className="max-w-7xl mx-auto p-4">
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full sm:w-2/12 px-2">
                            <Link to={"/"}>
                                <img
                                    className="absolute size-30 -top-12"
                                    src={LOGO}
                                    alt="Makan Care Logo"
                                />
                            </Link>
                        </div>
                        <div className="w-full sm:w-6/12 px-2">
                            <div className="flex">
                                <input
                                    className="flex-1 p-2 outline-none border border-[#ccc] rounded-md"
                                    type="text"
                                    placeholder="Search products here..."
                                />
                                <button className="bg-[#6b4f36] text-white border-none px-4 py-2 ml-2 rounded-md cursor-pointer">
                                    SEARCH
                                </button>
                            </div>
                        </div>
                        <div className="w-full sm:w-4/12 px-2 my-auto">
                            <div className="flex justify-end items-center">
                                <div className="pr-4 mr-4 border-r-1 border-gray-300">
                                    <Link to={"/login"}>Login / Register</Link>
                                </div>
                                <div className="flex justify-between">
                                    <img
                                        className="w-6 mx-2"
                                        src={SHARED_ICON}
                                        alt="Wishlist"
                                    />
                                    <img
                                        className="w-6 mx-2"
                                        src={CART_ICON}
                                        alt="Wishlist"
                                    />
                                    <img
                                        className="w-6 ml-2"
                                        src={HEART_ICON}
                                        alt="Cart"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shadow-2xl">
                <nav class="">
                    <div class="mx-auto max-w-7xl px-4">
                        <div class="relative flex h-16 items-center justify-between">
                            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <button
                                    type="button"
                                    class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                >
                                    <span class="absolute -inset-0.5"></span>
                                    <span class="sr-only">Open main menu</span>

                                    <svg
                                        class="block size-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        data-slot="icon"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                        />
                                    </svg>

                                    <svg
                                        class="hidden size-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        data-slot="icon"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M6 18 18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div class="flex shrink-0 items-center">
                                    <Dropdown items={shopByCategoryItems} />
                                </div>
                                <div class="hidden pl-20 sm:ml-6 sm:block border-l-1 border-gray-300">
                                    <div class="flex space-x-4">
                                        <Link
                                            className="px-3 py-2 text-sm font-medium"
                                            to={"/"}
                                        >
                                            Home
                                        </Link>
                                        <Link
                                            className="px-3 py-2 text-sm font-medium"
                                            to={"/services"}
                                        >
                                            Services
                                        </Link>
                                        <Link
                                            className="px-3 py-2 text-sm font-medium"
                                            to={"/services"}
                                        >
                                            {" "}
                                            New Arrivals
                                        </Link>
                                        <Link
                                            className="px-3 py-2 text-sm font-medium"
                                            to={"/services"}
                                        >
                                            More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="hidden lg:flex items-center">
                                    <img
                                        className="w-6"
                                        src={ROCKET_IMG}
                                        alt="free international delivery"
                                    />
                                    <span className="ml-2">
                                        Free International Delivery
                                    </span>
                                </div>

                                {/* <button
                                type="button"
                                class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                            >
                                <span class="absolute -inset-1.5"></span>
                                <span class="sr-only">View notifications</span>
                                <svg
                                    class="size-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    data-slot="icon"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                                    />
                                </svg>
                            </button>

                            <div class="relative ml-3">
                                <div>
                                    <button
                                        type="button"
                                        class="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                                        id="user-menu-button"
                                        aria-expanded="false"
                                        aria-haspopup="true"
                                    >
                                        <span class="absolute -inset-1.5"></span>
                                        <span class="sr-only">
                                            Open user menu
                                        </span>
                                        <img
                                            class="size-8 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </button>
                                </div>

                                <div
                                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="user-menu-button"
                                    tabindex="-1"
                                >
                                    <a
                                        href="#"
                                        class="block px-4 py-2 text-sm text-gray-700"
                                        role="menuitem"
                                        tabindex="-1"
                                        id="user-menu-item-0"
                                    >
                                        Your Profile
                                    </a>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 text-sm text-gray-700"
                                        role="menuitem"
                                        tabindex="-1"
                                        id="user-menu-item-1"
                                    >
                                        Settings
                                    </a>
                                    <a
                                        href="#"
                                        class="block px-4 py-2 text-sm text-gray-700"
                                        role="menuitem"
                                        tabindex="-1"
                                        id="user-menu-item-2"
                                    >
                                        Sign out
                                    </a>
                                </div>
                            </div> */}
                            </div>
                        </div>
                    </div>

                    <div class="sm:hidden" id="mobile-menu">
                        <div class="space-y-1 px-2 pt-2 pb-3">
                            <Link
                                className="px-3 py-2 text-sm font-medium"
                                to={"/"}
                            >
                                Home
                            </Link>
                            <Link
                                className="px-3 py-2 text-sm font-medium"
                                to={"/services"}
                            >
                                Services
                            </Link>
                            <Link
                                className="px-3 py-2 text-sm font-medium"
                                to={"/services"}
                            >
                                {" "}
                                New Arrivals
                            </Link>
                            <Link
                                className="px-3 py-2 text-sm font-medium"
                                to={"/services"}
                            >
                                More
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
