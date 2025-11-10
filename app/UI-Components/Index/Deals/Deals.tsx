"use client";

import Image, {StaticImageData} from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"

import Deal1 from "@/public/images/deal-1.png";
import Deal2 from "@/public/images/deal-2.png";

type DealType = {
    image:StaticImageData,
    title:String,
    discription:string,
    className?:string
}

const dealItems: DealType[] = [
    {
        image:Deal2,
        title:"Fresh Vegitables",
        discription:"Shop fresh, healthy vegetables delivered daily. Taste the garden in everyday."
    },
    {   
        image:Deal1,
        title:"Daily Snacks",
        discription:"Tasty daily snacks for every craving - fresh,  fun and ready to munch!"
    },
    {
        image:Deal2,
        title:"Fresh Vegitables",
        discription:"Shop fresh, healthy vegetables delivered daily. Taste the garden in everyday."
    },

];

import products from "@/app/JsonData/BestDeals.json";
import toast from "react-hot-toast";

const Deals = () => {

    const handleAddToCart = (product: any) => {
        let cart = JSON.parse(localStorage.getItem("cart") || "[]")

        const existingProduct = cart.find((item:any) => item.id === product.id)

        if(existingProduct){
            toast(`${product.title} is already in the cart`, {
                icon:"⚠️",
                style:{
                    border:"1px solid #facc15",
                    padding:"16px",
                    color:"#333333",
                    background:"#FFF9C4"
                }
            })
        }
        else{
            cart.push({...product, qty:1});
            localStorage.setItem("cart", JSON.stringify(cart))

            window.dispatchEvent(new Event('storageUpdate'));

            toast.success(`${product.title} is added to cart`)
        }
    }
    return (
        <div className="px-[5%] lg:px-[12%] py-5">
            <div className="title mb-10 w-full flex flex-col lg:flex-row justify-between items-center">
                <h2 className="text-3xl Unbounded">Todays Best Deals.</h2>
            </div>
            <Swiper 
                slidesPerView={2}
                spaceBetween={20}
                modules={[Autoplay]}
                autoplay={{
                    delay:1500
                }}
                speed={1500}
                breakpoints={{
                    1200:{slidesPerView:2},
                    991:{slidesPerView:2},
                    767:{slidesPerView:2},
                    575:{slidesPerView:1},
                    0:{slidesPerView:1}
                }}
            >
                {dealItems.map((deal, index) => (
                    <SwiperSlide key={index}>
                        <div className={`deal-wrap w-full px-5 py-6 rounded-2xl flex flex-col lg:flex-row justify-between items-center ${deal.className || ""}`}>
                            <div className="deal-image w-full lg:w-1/2">
                                <Image src={deal.image} alt={`${deal.title}`} className="w-full" />
                            </div>
                            <div className="w-full deal-info lg:w-1/2">
                                <h3 className="text-2xl Merienda font-bold leading-8 whitespace-pre-line">
                                    {deal.title}
                                </h3>   
                                <p className="my-2 text-gray-800 font-normal">
                                    {deal.discription}
                                </p> 
                                <button className="text-sm font-bold text-white hover:bg-(--text-color) cursor-pointer rounded-3xl bg-(--primary-color) px-3 py-2 mt-3 transition-all duration-300">
                                Shop Now <i className="bi bi-arrow-right ps-2"></i>
                            </button>                        
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Best deal products */}
            <div className="my-10">
                <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {products.map((product) => (
                        <div key={product.id} className="product-wrap border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-md transition-all hover:border-(--primary-color) cursor-pointer duration-300">
                            <div className="flex relative justify-center items-center w-full">
                                <Image src={product.image} alt={product.title} width="200" height="200" />
                            </div>                              
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Deals;
