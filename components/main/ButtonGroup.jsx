import Button from "@/components/main/Button";

export default function ButtonGroup({
                                        handleRemoveAllItems,
                                        handleResetInitial,
                                        handleMarkAllAsComplete,
                                        handleMarkAllAsIncomplete
                                    }) {


    return (
        <>
            <section className={"p-5"}>
                <Button onClick={handleMarkAllAsComplete} buttonType={"secondary"}>Mark all as complete</Button>
                <Button onClick={handleMarkAllAsIncomplete} buttonType={"secondary"}>Mark all as incomplete</Button>
                <Button onClick={handleResetInitial} buttonType={"secondary"}>Reset to initial</Button>
                <Button onClick={handleRemoveAllItems} buttonType={"secondary"}>Remove all items</Button>

            </section>
        </>
    )
}