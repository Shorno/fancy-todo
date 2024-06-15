import AddItemForm from "@/components/main/AddItemForm";
import ButtonGroup from "@/components/main/ButtonGroup";

export default function Sidebar(){
    return(
        <>

            <div className={"bg-[#EEEEEE] flex flex-col justify-between rounded-br-2xl w-[40%]"}>
                <AddItemForm/>
                <ButtonGroup/>
            </div>
        </>
    )
}