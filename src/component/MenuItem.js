import { useDispatch } from "react-redux";
import { addItem } from "../Const/cartSlice";
import { imagelink } from "./Const";

export const MenuItem = ({ items }) => {
  const dispatch = useDispatch();
  console.log(items);

  const handlebutton = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="border-b border-slate-950  flex justify-between my-2 mx-2 py-2 px-2">
      <div className=" ">
        <span className="p-5 font-black">{items.card?.info?.name}</span>
        <br></br>

        <span className="p-5 font-black">
          ₹
          {items.card?.info?.price / 100 ||
            items.card?.info?.defaultPrice / 100}
        </span>
      </div>

      <div className="flex float-end w-[200px] h-[200px] mr-[-40px]">
        <img
          src={imagelink + items.card?.info?.imageId}
          className="w-[130px] h-[130px] rounded-lg"
          alt="Menu Food "
        />
        <button
          type="button"
          className="ml-2 absolute bg-black text-gray-100 my-1 mx-1 py-2 px-2 rounded-lg"
          onClick={() => handlebutton(items)}
        >
          Add +
        </button>
      </div>
    </div>
  );
};
