import '../App.css';
import bg_img1 from "../../public/images/banner-bg-1.jpg"

const Banner_Comp = () => {
    return (
        <div>
       <div className='banner my-20 border-b border-gray-100'>
        <div className='flex flex-col justify-end'>
        <h1 className='text-5xl text-[#7C5E48] mt-10  font-sans font-semibold mb-4 flex justify-end me-44'>Premium Home </h1>
        <h1 className='text-5xl  text-[#7C5E48] font-sans font-semibold mb-4 flex justify-end me-44'>Decorator</h1>
        <a href="#" className='uppercase text-[#7C5E48] font-sans text-lg flex justify-end me-44 underline'>Learn More</a>
        </div>
       </div>
       </div>
    );
}

export { Banner_Comp };
