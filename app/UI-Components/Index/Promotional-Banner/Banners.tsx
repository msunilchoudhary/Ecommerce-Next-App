"use client";

import Image, {StaticImageData} from "next/image";

import promoBanner1 from "@/public/images/promo-banner-1.jpg";
import promoBanner2 from "@/public/images/promo-banner-2.jpg";
import promoBanner3 from "@/public/images/promo-banner-3.jpg";
import promoBanner4 from "@/public/images/promo-banner-4.jpg";

type BannerType = {
    image:StaticImageData,
    heading:string,
}

const banners: BannerType[] = [
    {image:promoBanner1, heading:"Everyday\nFresh Eggs"},
    {image:promoBanner2, heading:"Daily Fresh\nVegetables"},
    {image:promoBanner3, heading:"Everyday\nFresh Milk"},
    {image:promoBanner4, heading:"Everyday\nFresh Fruits"},
]

const Banners = () => {
    return (
        <div className="px-[5%] lg:px-[12%] py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {banners.map((banner, index) => (
                    <div key={index} className="relative">
                        <div className="banner-image">
                            <Image src={banner.image} alt={`Banner ${index + 1}`} className="w-full"/>
                        </div>
                        <div className="banner-content absolute bottom-5 left-[5%]">
                            <h2 className="text-xl font-bold Merienda leading-7 whitespace-pre-line">{banner.heading}</h2>
                            <button className="text-sm font-bold text-white hover:bg-(--text-color) rounded-3xl bg-(--primary-color) px-3 py-2 mt-3">
                                Shop Now <i className="bi bi-arrow-right ps-2"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Banners;
