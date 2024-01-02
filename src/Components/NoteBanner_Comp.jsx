const NoteBanner_Comp = (props) => {
    return (
<div className="flex justify-center flex-col items-center text-center my-10">
    <h1 className="text-3xl font-semibold my-5">{props.heading}</h1>
    <p className="my-5 w-[40%]">{props.paragraph}</p>
</div>
    )
} 
export {NoteBanner_Comp}