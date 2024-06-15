import Heading from "@/components/Heading";
import Footer from "@/components/Footer";
import Main from "@/components/Main";

export default function Home() {
    return (
        <>
            <main className={"bg-[#F1E5D1] w-full h-screen"}>
                <Heading/>
                <Main/>
                <Footer/>
            </main>
        </>
    );
}
