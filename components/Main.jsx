import Header from "@/components/main/Header";
import Sidebar from "@/components/main/Sidebar";
import ItemList from "@/components/main/ItemList";

export default function Main() {
    return (
        <>
            <section className={"h-[70%] w-[60%] mx-auto rounded-xl"}>
                <Header/>
                <div className={"flex w-full h-[90%]"}>
                    <ItemList/>
                    <Sidebar/>
                </div>
            </section>
        </>
    )
}