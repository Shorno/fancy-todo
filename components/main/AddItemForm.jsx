"use client"
import Button from "@/components/main/Button";
import {useEffect, useRef, useState} from "react";

export default function AddItemForm({onAddItem}) {
    const [itemText, setItemText] = useState("")
    const inputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!itemText) {
            alert("Items cannot be empty")
            inputRef.current.focus();
            return;
        }

        onAddItem(itemText)
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