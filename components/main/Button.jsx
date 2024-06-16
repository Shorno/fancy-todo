export default function Button({children, buttonType, onClick}) {
    return (
        <>
            <button
                onClick={onClick}
                className={`mt-5 bg-[#212121] text-white w-full rounded-md py-2 ${buttonType === "secondary" ? "bg-[#222831]" : ""}`}>
                {children}
            </button>
        </>
    )
}