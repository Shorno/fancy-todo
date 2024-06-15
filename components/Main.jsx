"use client"
import Header from "@/components/main/Header";
import Sidebar from "@/components/main/Sidebar";
import ItemList from "@/components/main/ItemList";
import {useState} from "react";
import {initialItems} from "@/lib/constansts";

export default function Main() {
    const [items, setItems] = useState(initialItems);

    return (
        <>
            <section className={"h-[70%] w-[60%] mx-auto rounded-xl"}>
                <Header/>
                <div className={"flex w-full h-[90%]"}>
                    <ItemList items={items}/>
                    <Sidebar setItems ={setItems} />
                </div>
            </section>
        </>
    )
}