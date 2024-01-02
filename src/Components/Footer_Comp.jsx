import { Brand_Comp } from "./Brand_Comp"

const Footer_Comp = () =>{
    return (
    <footer className="bg-[#F8F8F8] py-20 h-96">
        <div className="w-[70%] mx-auto flex">
        <div className="flex flex-col w-[25%] ">
            <Brand_Comp/>
            <p className="text-gray-400 text-start mt-3">Follow us:</p>
            <ul className="flex text-center mt-5">
                <li className="me-6 text-[gray] hover:text-red-600"><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                <li className="me-6 text-[gray] hover:text-red-600"><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                <li className="me-6 text-[gray] hover:text-red-600"><a href="#"><i class="fa-brands fa-pinterest-p"></i></a></li>
                <li className="me-6 text-[gray] hover:text-red-600"><a href="#"><i class="fa-brands fa-vimeo-v"></i></a></li>
            </ul>
        </div>
        <div className="w-[25%] my-10 text-base">
            <ul className="flex flex-col mb-10">
                <li className="text-[black] mb-10 text-2xl uppercase"><a href="#">Useful Links</a></li>
                <li className="text-[gray] mb-2 hover:text-red-600"><a href="#">Sopping cart</a></li>
                <li className="text-[gray] mb-2 hover:text-red-600"><a href="#">Wishlist</a></li>
                <li className="text-[gray] mb-2 hover:text-red-600"><a href="#">Checkout</a></li>
                <li className="text-[gray] mb-2 hover:text-red-600"><a href="#">Support</a></li>
            </ul>
        </div>
        <div className="w-[25%] my-10 text-base">
        <ul className="flex flex-col mb-10">
                <li className="text-[black] mb-10 text-2xl uppercase"><a href="#">About us</a></li>
                <li className="text-[gray] mb-2 hover:text-red-600"><a href="#">About</a></li>
                <li className="text-[gray] mb-2 hover:text-red-600"><a href="#">Products</a></li>
                <li className="text-[gray] mb-2 hover:text-red-600"><a href="#">Terms And conditions </a></li>
                <li className="text-[gray] mb-2 hover:text-red-600"><a href="#">Help Center</a></li>
            </ul>
        </div>
        <div className="w-[25%] my-10 text-base">
            <ul className="flex flex-col mb-10">
                <li className="text-[black] mb-10 text-2xl uppercase">newsletter</li>
                <li className="mb-10">Subscribe to get all new updates</li>
                <li className="border-b p-2"><input placeholder="Enter Your Email" type="email"  className="bg-transparent outline-none"/><i class="fa-solid fa-magnifying-glass fa-rotate-90"></i></li>
            </ul>
        </div>
        </div>
        <div className="bg-[#EBEBEB] items-center h-[20%] flex justify-center text-center mb-2 text-[gray]">
            <div className="">
            <p>copyright <i class="fa-regular fa-copyright"></i> <a href="#" className="hover:text-red-600">Daxone . </a>All Rigth Reserved</p>
            </div>
        </div>
    </footer>
    )
}
export {Footer_Comp}