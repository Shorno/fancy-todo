"use client"
import Header from "@/components/main/Header";
import Sidebar from "@/components/main/Sidebar";
import ItemList from "@/components/main/ItemList";
import {useState} from "react";
import {initialItems} from "@/lib/constansts";

export default function Main() {
    const [items, setItems] = useState(initialItems);

    const handleAddItem = (newItemText) => {

        const newItem = {
            id: new Date().getTime(),
            name: newItemText,
            packed: false
        }

        const newItems = [...items, newItem]
        setItems(newItems)
    };
    const handleRemoveAllItems = () => {
        setItems([]);
    }
    const handleResetInitial = () => {
        setItems(initialItems)
    }
    const handleMarkAllAsComplete = () => {
        const newItems = items.map((item) => {
            return {...item, packed: true}
        })
        setItems(newItems);
    }
    const handleMarkAllAsIncomplete = () => {
        const newItems = items.map((item) => {
            return {...item, packed: false}
        })
        setItems(newItems)
    }


    return (
        <>
            <section className={"h-[70%] w-[60%] mx-auto rounded-xl"}>
                <Header/>
                <div className={"flex w-full h-[90%]"}>
                    <ItemList items={items}/>
                    <Sidebar
                        handleAddItem={handleAddItem}
                        handleRemoveAllItems={handleRemoveAllItems}
                        handleResetInitial={handleResetInitial}
                        handleMarkAllAsComplete={handleMarkAllAsComplete}
                        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
                    />
                </div>
            </section>
        </>
    )
}