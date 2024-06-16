"use client"


export default function ItemList({items, handleDeleteItem, handleToggleItem}) {

    return (
        <>
            <div className={"bg-[#EEF7FF] w-full rounded-bl-2xl border-r-2 border-[#F1E5D1]"}>
                {
                    items.map((item) => {
                        return <Item handleDeleteItem={handleDeleteItem} handleToggleItem={handleToggleItem}
                                     key={item.id} item={item}/>
                    })
                }
            </div>
        </>
    )
}

function Item({item, handleDeleteItem, handleToggleItem}) {
    return (
        <>
            <div className={"p-4 border-b-2"}>
                <li className={"list-none flex justify-between"}>
                    <label>
                        <input
                            onChange={() => handleToggleItem(item.id)}
                            type="checkbox" checked={item.packed}
                            className={"mr-2 accent-[#F1E5D1]"}
                        />
                        {item.name}
                    </label>
                    <button onClick={() => handleDeleteItem(item.id)}>❌</button>
                </li>
            </div>

        </>
    )
}