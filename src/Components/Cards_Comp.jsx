import img_card1 from "../../public/images/pro-hm1-1.jpg"
import img_card2 from "../../public/images/pro-hm1-2.jpg"
import img_card3 from "../../public/images/pro-hm1-3.jpg"
import img_card4 from "../../public/images/pro-hm1-4.jpg"

const Cards_Comp = () => {
    return (
        <div className="w-[80%] mx-auto flex justify-between">
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

export {Cards_Comp} 