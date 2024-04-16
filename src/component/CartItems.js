import { useDispatch, useSelector } from "react-redux";
import { MenuItem } from "./MenuItem";
import  {clearItem} from "../Const/cartSlice"


export const CartItems = () => {
 const Citems = useSelector((store) => store.Cart.items);
 const dispatch = useDispatch();
 const handleclkearcart = () =>{
       dispatch(clearItem());
 }
 return (
    <div className="text-center w-6/12">
      <h1>Cart</h1>
      <button onClick={handleclkearcart}>Clear cart</button>
      {
        Citems.length === 0 ? (
          <h1>Add items to cart</h1>
        ) : (
          Citems.map((cartItem,index) => (
            <MenuItem key={index} items={cartItem} /> // Assuming each cartItem has a unique id
          ))
        )
      }
    </div>
 );
};
