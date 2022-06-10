import React from "react";
import GroceryInput from "./GroceryInput"
import GroceryList from "./GroceryList"
import {v4 as uuid} from "uuid"


const Grocery = () => {
    const [item, setItem] = React.useState([]);

    const HandleItem = (title) => {
        const GroceryItem = {
            title: title,
            id: uuid()
        };
        setItem([...item, GroceryItem]);
    };

    const HandleDelete=(ItemId)=>{
        console.log(ItemId)
        const newItems=item.filter((data)=>ItemId !== data.id)
            
            setItem(newItems);
    }

    return (
        <>
            <GroceryInput HandleItem={HandleItem} />
            <GroceryList item={item} HandleDelete={HandleDelete} />
        </>
    );
};

export default Grocery;