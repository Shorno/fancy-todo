"use client"
import {initialItems} from "@/lib/constansts";
import {useState} from "react";

export default function ItemList() {
    const [items, setItems] = useState(initialItems);

    return (
        <>
            <div className={"bg-[#EEF7FF] w-full rounded-bl-2xl border-r-2 border-[#F1E5D1]"}>
                {
                    items.map((item) => {
                        return <Item key={item.id} item={item}/>
                    })
                }
            </div>
        </>
    )
}

function Item({item}) {
    return (
        <>
            <div className={"p-4 border-b-2"}>
                <li className={"list-none flex justify-between"}>
                    <label>
                        <input type="checkbox" checked={item.packed} className={"mr-2 accent-[#F1E5D1]"}/> {item.name}
                    </label>
                    <button>❌</button>
                </li>
            </div>

        </>
    )
}