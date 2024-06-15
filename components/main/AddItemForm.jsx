import Button from "@/components/main/Button";

export default function AddItemForm() {
    return (
        <>
            <from className={"w-full p-5"}>
                <p className={"pb-2 font-semibold"}>Add an item</p>
                <input
                    type="text"
                    className={"w-full rounded-l py-2"}
                />
                <Button>Add to item</Button>
            </from>
        </>
    )
}