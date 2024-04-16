import { useDispatch } from "react-redux";
import { addItem } from "../Const/cartSlice";
import { imagelink } from "./Const";

export const MenuItem = ({ items }) => {
 const dispatch = useDispatch();
 console.log(items)
 // Original handlebutton function
 // const handlebutton = () => {
 //   dispatch(addItem("pizza"))
 // }

 // Adjusted handlebutton function to accept an item as an argument
 const handlebutton = (item) => {
    // Assuming `item` is the specific item you want to add to the cart
    dispatch(addItem(item));
 };

 return (
    <div className="border-b-5 flex flex-col my-2 mx-2 py-2 px-2">
      <div className="flex justify-between items-center w-full">
        <span className="text-left">{items.card?.info?.name}</span>
        <div className="flex float-end">
          <img src={imagelink + items.card?.info?.imageId} className="w-2/12 h-18" alt="Image Description" />
          {/* Adjusted the onClick event to pass the specific item to handlebutton */}
          <button type="button" className="ml-2 bg-slate-500 text-gray-100 my-1 mx-1 py-2 px-2" onClick={() => handlebutton(items)}>Add +</button>
          {/* Original button onClick event */}
          {/* <button type="button" className="ml-2 bg-slate-500 text-gray-100 my-1 mx-1 py-2 px-2" onClick={{handlebutton}}>Add +</button> */}
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <span className="text-left">₹{items.card?.info?.price / 100}</span>
        <p className="text-xs">{items.card?.info?.description}</p>
      </div>
    </div>
 );
};
