import { Button_Comp } from "./Button_Comp"

const Banner2text_Comp = () =>{
    return(
        <div className=" m-10 items-center grid ">
            <p className="mt-24">Lorem Ipsum is simply dummy text of the <br />
            printing and typesetting industry.</p>
        <h1 className="font-bold text-6xl flex justify-start my-10">Winter Discount <br /> Up to 30%</h1>
        <p className="flex justify-start mb-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <Button_Comp/>
        </div>
    )
}
export {Banner2text_Comp}