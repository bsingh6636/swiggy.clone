import { useState } from "react";
import { MenuItem } from "./MenuItem";

const MenuCard = ({menu,showitem,setindexset}) => {
    const itemsarray = menu?.card?.card?.itemCards;
    const itemCardsCount = itemsarray?.length;
   
   const handleclick = () =>{
    setindexset()
   }
    return (
    <div className="">
        <div className="w-6/12 flex flex-wrap bg-slate-200 my-2 mx-auto px-2 py-3 shadow-xl cursor-pointer" onClick={handleclick}>
            <span className="font-semibold w-full">{menu.card?.card?.title} ({itemCardsCount})</span>
            <span>⬇️</span>
             </div>
            <div className="w-6/12 bg-slate-200 flex flex-col  my-2 mx-auto ">
            {/* {console.log(itemsarray)} */}
         { showitem &&  (itemsarray && itemsarray.map((item, index) => {
                return <MenuItem key={index} items={item} />;
            }))}</div>
        </div>
    );
}

export default MenuCard;
