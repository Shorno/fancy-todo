import AddItemForm from "@/components/main/AddItemForm";
import ButtonGroup from "@/components/main/ButtonGroup";

export default function Sidebar(
    {
        handleAddItem,
        handleRemoveAllItems,
        handleResetInitial,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete
    }) {
    return (
        <>
            <div className={"bg-[#EEEEEE] flex flex-col justify-between rounded-br-2xl w-[40%]"}>
                <AddItemForm onAddItem={handleAddItem}/>
                <ButtonGroup
                    handleRemoveAllItems={handleRemoveAllItems}
                    handleResetInitial={handleResetInitial}
                    handleMarkAllAsComplete={handleMarkAllAsComplete}
                    handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
                />
            </div>
        </>
    )
}