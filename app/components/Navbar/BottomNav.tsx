"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/divyantra-logo.png"
import { useEffect, useState } from "react";

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Shop",
    href: "/UI-Components/Shop",
    dropdown: [
      { label: "Shop", href: "/UI-Components/Shop" },
      { label: "Shop Details", href: "" },
    ],
  },
  {
    label: "Pages",
    href: "#",
    dropdown: [
      { label: "Cart", href: "/UI-Components/Pages/cart" },
      { label: "Wishlist", href: "/UI-Components/Pages/wishlist" },
      { label: "Checkout", href: "/UI-Components/Pages/checkout" },
      { label: "Account", href: "/UI-Components/Pages/account" },
    ],
  },
  {
    label: "Blog",
    href: "#",
    dropdown: [
      { label: "Blog", href: "/UI-Components/Blogs" },
      { label: "Blog Details", href: "#" },
    ],
  },
  { label: "Contact Us", href: "/UI-Components/Pages/contact" },
];

const BottomNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<Record<string, boolean>>({});
  const [isFixed, setIsFixed] = useState(false);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full bg-white shadow-sm transition-all duration-500 
                ${isFixed ? "fixed top-0 left-0 z-50 fixed-nav" : ""}
                `}
    >
      <div className="flex items-center justify-between px-[5%] lg:px-[12%] text-gray-700">
        {/* Desktop Menu */}
        <Link href="#" className={`hidden ${isFixed ? "lg:flex" : "hidden"}`}>
          <Image
            src={Logo}
            alt="Divyantra Enterprises"
            width="157"
            height="60"
          />
        </Link>
        <nav className="hidden lg:flex space-x-6 menu-link relative">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative group z-99999">
                <Link href={link.href} className="flex items-center gap-1">
                  {link.label}
                  <i className="ri-arrow-down-s-line"></i>
                </Link>
                <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-xl p-2 border border-gray-100 rounded-lg min-w-[150px]">
                  {link.dropdown.map((item) =>
                    item.label === "Shop Details" ? (
                      <Link
                        key={item.label}
                        href={{
                          pathname: "/UI/Components/Shop",
                          query: {},
                        }}
                        className="block px-4 py-2 rounded-md hover:bg-(--primary-light-color) transition-all"
                      >
                        {item.label}
                      </Link>
                    ) : item.label === "Blog Details" ? (
                      <Link
                        key={item.label}
                        href={{
                          pathname: "/UI/Components/Blogs",
                          query: {},
                        }}
                        className="block px-4 py-2 rounded-md hover:bg-(--primary-light-color) transition-all"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 rounded-md hover:bg-(--primary-light-color) transition-all"
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </div>
              </div>
            ) : (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            )
          )}
        </nav>

        <button className="nav-button cursor-pointer font-bold bg-(--primary-color) text-white px-2 py-1 hidden lg:flex items-center">
          <i className="bi bi-telephone p-2 text-xl"></i>
          <span className="p-2">+91 9891899198</span>
        </button>

        {/* Mobile nav header */}
        <div className="lg:hidden flex items-center justify-between gap-4 w-full">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            <div className="flex items-center gap-x-5">
              <i className="ri-menu-line"></i>
            </div>
          </button>

          <div className="flex lg:hidden items-center space-x-6">
            {/* Wishlist */}
            <Link href="#" className="relative">
              <i className="bi bi-heart text-gray-600 text-xl hover:text-(--primary-color)"></i>
              <span className="absolute flex items-center justify-center w-4 h-4 -top-2 -right-2 bg-(--primary-color) text-white text-xs rounded-full">
                0
              </span>
            </Link>

            {/* Cart */}
            <Link href="#" className="relative">
              <i className="bi bi-cart text-gray-600 text-xl hover:text-(--primary-color)"></i>
              <span className="absolute flex items-center justify-center w-4 h-4 -top-2 -right-2 bg-(--primary-color) text-white text-xs rounded-full">
                0
              </span>
            </Link>
          </div>

          <button className="nav-button cursor-pointer font-bold bg-(--primary-color) text-white px-2 py-1 items-center">
            <i className="bi bi-telephone p-2 text-xl"></i>
            <span className="p-2">+91 9891899198</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu  */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-md overflow-hidden transition-all duration-500">
          <nav className="flex flex-col px-[5%] py-3 space-y-1 font-medium">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="flex flex-col">
                  <button 
                    onClick={()=> toggleDropdown(link.label)} 
                    className="flex justify-between w-full pt-1 pb-2 border-b border-gray-300 items-center rounded-md hover:bg-gray-100">
                    {link.label}
                    <i className={`ri-arrow-down-s-line transition-transform ${openDropdown[link.label] ? "rotate-180" : ""}`}></i>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${openDropdown[link.label] ? "max-h-60 mt-1":"max-h-0"}`}>
                    <div className="flex flex-col bg-green-50 p-2 space-y-1 font-normal">
                      {link.dropdown.map((item) =>
                        item.label === "Shop Details" ? (
                          <Link
                            key={item.label}
                            href={{
                              pathname: "/UI/Components/Shop",
                              query: {},
                            }}
                            className="block px-1 py-2 rounded-md hover:bg-(--primary-light-color) transition-all"
                          >
                            {item.label}
                          </Link>
                        ) : item.label === "Blog Details" ? (
                          <Link
                            key={item.label}
                            href={{
                              pathname: "/UI/Components/Blogs",
                              query: {},
                            }}
                            className="block px-1 py-2 rounded-md hover:bg-(--primary-light-color) transition-all"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block px-1 py-2 rounded-md hover:bg-(--primary-light-color) transition-all"
                          >
                            {item.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={link.label} href={link.href} className="border-b border-gray-300 pb-2 nth-last-of-type-[1]:border-none nth-last-of-type-[1]:pb-0">
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </div>
  );
};

export default BottomNav;
