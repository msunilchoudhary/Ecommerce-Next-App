import Link from "next/link";

const TopNavbar = () => {
    return (
        <div className="w-full bg-(--primary-color) text-white text-sm hidden lg:block">
            <div className="flex items-center justify-between py-2 px-[5%] lg:px-[12%]">
                <div className="flex space-x-4">
                    <Link href="#" className="pr-3 border-r border-gray-300 hover:underline">About Us</Link>
                    <Link href="#" className="pr-3 border-r border-gray-300 hover:underline">Free Delivery</Link>
                    <Link href="#" className="hover:underline">Return Policy</Link>
                </div>

                <div className="flex space-x-4">                    
                    <Link href="#" className="pr-3 border-r border-gray-300 hover:underline">Help Center</Link>
                    <Link href="#" className="hover:underline">My Account</Link>
                </div>
            </div>
        </div>
    );
}

export default TopNavbar;
