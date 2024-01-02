const Cart_Comp = () =>{
    return(
<div className="flex my-10">
        <ul className="flex justify-around">
            <li className="mx-3 text-xl font-thin hover:text-red-600"><a href="#"><i class="fa-solid fa-cart-shopping"></i> 2 items</a></li>
            <li className="mx-3 text-xl font-thin hover:text-red-600"><a href="#"><i class="fa-solid fa-magnifying-glass fa-rotate-90"></i></a></li>
        </ul>
</div>
    )
}
export {Cart_Comp}