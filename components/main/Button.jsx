export default  function Button({children, type}){
    return (
        <>
        <button className={`mt-5 bg-[#212121] text-white w-full rounded-md py-2 ${type === "secondary" ? "bg-[#222831]"  : ""}`}>{children}</button>
        </>
    )
}