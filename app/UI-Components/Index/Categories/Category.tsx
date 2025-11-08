"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";

import Category1 from "@/public/images/category-1.jpg";
import Category2 from "@/public/images/category-2.jpg";
import Category3 from "@/public/images/category-3.jpg";
import Category4 from "@/public/images/category-4.jpg";
import Category5 from "@/public/images/category-5.jpg";
import Category6 from "@/public/images/category-6.jpg";
import Category7 from "@/public/images/category-7.jpg";
import Category8 from "@/public/images/category-8.png";
import Category9 from "@/public/images/category-9.png";
import Category10 from "@/public/images/category-10.png";

type CategoryType = {
  image: StaticImageData;
  title: string;
  products: string;
};
const categories: CategoryType[] = [
  { image: Category1, title: "Vegitables", products: "125+ Products" },
  { image: Category2, title: "Fish & Meat", products: "90+ Products" },
  { image: Category3, title: "Desserts", products: "80+ Products" },
  { image: Category4, title: "Drinks & Juice", products: "60+ Products" },
  { image: Category5, title: "Fresh Fruits", products: "100+ Products" },
  { image: Category6, title: "Animals Food", products: "70+ Products" },
  { image: Category7, title: "Yammy Candy", products: "50+ Products" },
  { image: Category8, title: "Dairy & Egg", products: "50+ Products" },
  { image: Category9, title: "Snacks", products: "110+ Products" },
  { image: Category10, title: "Frozen Food", products: "125+ Products" },
];

const Category = () => {
  return (
    <div className="px-[5%] lg:px-[12%] py-10">
      <Swiper
        slidesPerView={8}
        spaceBetween={20}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1500,
        }}
        speed={1500}
        breakpoints={{
          1200: { slidesPerView: 7 },
          991: { slidesPerView: 5 },
          767: { slidesPerView: 4 },
          575: { slidesPerView: 3 },
          0: { slidesPerView: 3 },
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="category-wrap flex flex-col items-center justify-center cursor-pointer">
              <div className="category-image">
                <Image
                  src={category.image}
                  alt={category.title}
                  className="transition-all duration-300"
                />
              </div>
              <div className="category-info flex flex-col items-center justify-center">
                <h2 className="text-md Unbounded hover:text-(--primary-color) transition-all duration-300">
                  {category.title}
                </h2>
                <p className="text-gray-500">{category.products}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
