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
        <div className="px-[5%] lg:px-[12%] py-10">
            Banners
        </div>
    );
}

export default Banners;
