import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../Const/cartSlice";
import { imagelink } from "../Const/Const";

export const MenuItem = ({ items }) => {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const handlebutton = (item) => {
    dispatch(addItem(item));

    // Retrieve existing cart items from local storage or initialize an empty array
    const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    // Add the new item to the existing cart items
    const updatedCartItems = [...existingCartItems, item];
    // Update local storage with the updated cart items
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));

    // Set added state to true to trigger the effect
    setAdded(true);

    // Reset added state after 1 second to remove the effect
    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  return (
    <div className="border-b border-slate-950 flex justify-between my-2 mx-2 py-2 px-2">
      <div className="">
        <span className="p-5 font-black">{items.card?.info?.name}</span>
        <br />
        <span className="p-5 font-black">
          ₹
          {items.card?.info?.price / 100 ||
            items.card?.info?.defaultPrice / 100}
        </span>
      </div>

      <div className="relative">
        <img
          src={imagelink + items.card?.info?.imageId}
          className="w-[130px] h-[130px] rounded-lg"
          alt="Menu Food "
        />
        <button
          type="button"
          className={`${
            added ? "bg-green-500 text-white" : "bg-green-600 text-gray-100"
          } absolute  transform -translate-y-1/2 right-0 mr-[30px] mt-[-20px]  py-2 px-4 rounded-lg`}
          onClick={() => handlebutton(items)}
        >
          {added ? "Added" : "Add +"}
        </button>
      </div>
    </div>
  );
};
