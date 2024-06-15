"use client"
import Button from "@/components/main/Button";
import {useState} from "react";

export default function AddItemForm({setItems}) {
    const [itemText, setItemText] = useState("")
    return (
        <>
            <form onSubmit={(event) => {
                event.preventDefault()
                const newItem = {
                    id: 4,
                    name: itemText,
                    packed: false
                }
                setItems(prev => [...prev, newItem])
            }}
                  className={"w-full p-5"}>
                <p className={"pb-2 font-semibold"}>Add an item</p>
                <input
                    value={itemText}
                    onChange={(event) => {
                        setItemText(event.target.value)
                    }}
                    type="text"
                    className={"w-full rounded-l py-2"}
                />
                <Button>Add to item</Button>
            </form>
        </>
    )
}