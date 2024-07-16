import { useDispatch } from "react-redux";
// import { addItem } from "../Const/cartSlice";
import { removeItem } from "../Const/cartSlice";
import { imagelink } from "../Const/Const";

export const CheckItemCart = ({ items }) => {

 

  return (
    <div className="border-b border-slate-950  flex justify-between my-2 mx-2 py-2 px-2 bg-white">
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

      </div>
    </div>
  );
};


export const CartItemupdated = (CheckItemCart) => {
  const dispatch = useDispatch();

  const removeItemAndUpdateLocalStorage = (item) => {
    //  console.log(item)
     dispatch(removeItem(item));

       const existingCartItems = JSON.parse(localStorage.getItem("cart")) || [];
  

      const updatedCartItems = existingCartItems.filter(cartItem => {
 
      return cartItem.card.info.id !== item.items.card.info.id;
    });
  
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));


  };
  return (props) => {

    return (
      <div className=" relative" >
        <CheckItemCart {...props} />
        <button className="absolute top-0 right-0 bg-red-600 text-white rounded-lg mr-[70px] mt-[100px] p-2" onClick={() => removeItemAndUpdateLocalStorage(props)}>Remove</button>
      </div>
    )
  }
}