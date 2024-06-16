"use client"
import Button from "@/components/main/Button";
import {useEffect, useRef, useState} from "react";

export default function AddItemForm({setItems}) {
    const [itemText, setItemText] = useState("")
    const inputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!itemText) {
            alert("Items cannot be empty")
            inputRef.current.focus();
            return;
        }
        const newItem = {
            id: new Date().getTime(),
            name: itemText,
            packed: false
        }
        setItems(prev => [...prev, newItem])
        setItemText("");
    }


    useEffect(() => {
        inputRef.current.focus();
    }, [itemText])

    return (
        <>
            <form onSubmit={handleSubmit}
                  className={"w-full p-5"}>
                <p className={"pb-2 font-semibold"}>Add an item</p>
                <input
                    ref={inputRef}
                    value={itemText}
                    onChange={(event) => {
                        setItemText(event.target.value)
                    }}
                    type="text"
                    className={"w-full rounded-l py-2"}
                    autoFocus
                />
                <Button>Add to item</Button>
            </form>
        </>
    )
}