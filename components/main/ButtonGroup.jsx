import Button from "@/components/main/Button";

export default function ButtonGroup(){
    return (
        <>
            <section className={"p-5"}>
                <Button type={"secondary"}>Mark all as complete</Button>
                <Button type={"secondary"}>Mark all as incomplete</Button>
                <Button type={"secondary"}>Reset to initial</Button>
                <Button type={"secondary"}>Remove all items</Button>
            </section>
        </>
    )
}