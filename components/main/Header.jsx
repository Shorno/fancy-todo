import Logo from "@/components/main/Logo";
import Counter from "@/components/main/Counter";

export default function Header(){
    return(
        <>
            <div className={"flex justify-between rounded-t-xl p-5 items-center h-16 bg-[#F4F9F9] border-b-2 border-[#F1E5D1]"}>
                <Logo/>
                <Counter/>
            </div>
        </>
    )
}

