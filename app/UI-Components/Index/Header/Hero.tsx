"use client";

import Image from "next/image";
import Hero1 from "@/public/images/grocery.png";
import Hero2 from "@/public/images/grocery-2.png";
import Hero3 from "@/public/images/hero4.webp";
import Hero4 from "@/public/images/hero3.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";

const Hero = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  return (
    <div className="px-[5%] lg:px-[12%] py-5">
      <div className="relative py-6 Hero flex items-center gap-5">
        <Swiper
          slidesPerView={1}
          loop={true}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          autoplay={true}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="hero-wrap px-15 w-full flex flex-col lg:flex-row items-center justify-between">
              <div className="w-full lg:w-1/1">
                <h1 className="Merienda text-2xl lg:text-[2.3rem] font-bold mt-3 mb-6">
                  Daily Grocery Order and Get Express Delivery
                </h1>
                <p className="w-[80%]">
                  Order your daily groceries online and enjoy express delivery
                  straight to your doorstep. Fresh produce, essentials, and
                  more-fast, convenient, and reliable service for your everyday
                  needs.
                </p>
                <button className="px-5 py-2 rounded-full text-white font-bold mt-8 bg-(--primary-color) hover:bg-white hover:text-(--primary-color) transition-all duration-300">
                  Shop Now <i className="bi bi-cart3 ps-3"></i>
                </button>
                
              </div>
              <div className="hero-image w-full lg:w-1/1">
                    <Image src={Hero1} alt="Grocery" className="Hero-image" />
                </div>
            </div>
          </SwiperSlide>
          {/* Slide 2 */}
          <SwiperSlide>
            <div className="hero-wrap px-15 w-full flex flex-col lg:flex-row items-center justify-between">
              <div className="w-full lg:w-1/1">
                <h1 className="Merienda text-2xl lg:text-[2.3rem] font-bold mt-3 mb-6">
                  Daily Grocery Order and Get Express Delivery
                </h1>
                <p className="w-[80%]">
                  Order your daily groceries online and enjoy express delivery
                  straight to your doorstep. Fresh produce, essentials, and
                  more-fast, convenient, and reliable service for your everyday
                  needs.
                </p>
                <button className="px-5 py-2 rounded-full text-white font-bold mt-8 bg-(--primary-color) hover:bg-white hover:text-(--primary-color) transition-all duration-300">
                  Shop Now <i className="bi bi-cart3 ps-3"></i>
                </button>
                
              </div>
              <div className="hero-image w-full lg:w-1/1">
                    <Image src={Hero2} alt="Grocery" className="Hero-image" />
                </div>
            </div>
          </SwiperSlide>

          {/* Custom slide button */}
          <div 
            ref={prevRef}
            className="swiper-button-prev-custom absolute left-1 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-white/80 hover:bg-white rounded-full px-3 py-2 shadow"
          >
            <i className="ri-arrow-left-s-line text-2xl text-gray-800"></i>
          </div>
          <div 
            ref={nextRef}
            className="swiper-button-next-custom absolute right-1 top-1/2 z-10 -translate-y-1/2 cursor-pointer bg-white/80 hover:bg-white rounded-full px-3 py-2 shadow"
          >
            <i className="ri-arrow-right-s-line text-2xl text-gray-800"></i>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
