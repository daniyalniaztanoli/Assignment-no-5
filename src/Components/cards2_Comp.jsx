import img_card1 from "../../public/images/pro-hm1-5.jpg"
import img_card2 from "../../public/images/pro-hm1-6.jpg"
import img_card3 from "../../public/images/pro-hm1-7.jpg"
import img_card4 from "../../public/images/pro-hm1-8.jpg"

const Cards2_Comp = () => {
    return (
        <div className="w-[80%] mx-auto flex justify-between my-10">
            <div className="w-1/2 mx-10">
            <img src={img_card1} alt="" />
            <div className="mx-2">
            <p className="text-[#BABABA]">Chair</p>
            <p>Golden Easy Spot Chair.</p>
            <p>$210.00</p>
            </div>
            </div>
            <div className="w-1/2 mx-10">
            <img src={img_card2} alt="" />
            <div className="mx-2">
            <p className="text-[#BABABA]">Chair</p>
            <p>Golden Easy Spot Chair.</p>
            <p>$210.00</p>
            </div>
            </div>
            <div className="w-1/2 mx-10">
            <img src={img_card3} alt="" />
            <div className="mx-2">
            <p className="text-[#BABABA]">Chair</p>
            <p>Golden Easy Spot Chair.</p>
            <p>$210.00</p>
            </div>
            </div>
            <div className="w-1/2 mx-10">
            <img src={img_card4} alt="" />
            <div className="mx-2">
            <p className="text-[#BABABA]">Chair</p>
            <p>Golden Easy Spot Chair.</p>
            <p>$210.00</p>
            </div>
            </div>
        </div>
    )
}

export {Cards2_Comp} 