"use client";

import Link from "next/link";

const MiddleNav = () => {
  return (
    <div className="w-full bg-green-50 border-b border-gray-300 relative">
      <div className="flex items-center justify-between py-3 px-[8%] lg:px-[12%]">
        {/* Logo */}
        <Link href="#" className="">
          <img
            src="/divyantra157x60.png"
            alt="Divyantra Enterprises"
            width="157"
            height="60"
          />
        </Link>

        {/* Search */}
        <div className="flex flex-1 ms-6 lg:mx-0 max-w-xl relative">
          <input
            type="text"
            placeholder="Search for a product or brand"
            className="flex-1 border border-gray-400 px-3 py-2 outline-none rounded-s-lg"
          />
          <button className="bg-(--primary-color) text-white px-3 border-none rounded-r-lg cursor-pointer">
            <i className="bi bi-search"></i>
          </button>

          {/* Location */}
          <div className="hidden lg:flex text-sm ms-5 items-center ps-2 bg-white border border-gray-400 rounded-lg justify-center">
            <i className="bi bi-geo-alt text-lg text-(--primary-color) "></i>
            <select name="location" className="px-3 rounded-lg text-(--primary-color) font-semibold focus:border-(--primary-color) appearance-none cursor-pointer outline-none" defaultValue="New Delhi">
                <option>New Delhi</option>
                <option>Noida</option>
                <option>Ghaziabad</option>
                <option>Lucknow</option>
                <option>Patna</option>
            </select>
          </div>
          
          
        </div>

        {/* Wishlist & cart */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Wishlist */}
            <Link href="#" className="relative">
                <i className="bi bi-heart text-gray-600 text-xl hover:text-(--primary-color)"></i>
                <span className="absolute flex items-center justify-center w-4 h-4 -top-2 -right-2 bg-(--primary-color) text-white text-xs rounded-full">0</span>
            </Link>

            {/* Cart */}
            <Link href="#" className="relative">
                <i className="bi bi-cart text-gray-600 text-xl hover:text-(--primary-color)"></i>
                <span className="absolute flex items-center justify-center w-4 h-4 -top-2 -right-2 bg-(--primary-color) text-white text-xs rounded-full">0</span>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default MiddleNav;
