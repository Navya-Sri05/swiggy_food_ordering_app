import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const Cart=()=>{

   

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
    }
    return(
        <div className="text-center m-4 p-4 ">
            <h2 className="text-2xl font-bold">Cart page</h2>
            <div className="w-6/12 m-auto">
            <button className="bg-slate-400 text-white p-2 m-2 rounded-lg"
            onClick={handleClearCart}>
                Clear cart</button>
                {cartItems.length===0 && <h1>cart is empty please add items</h1>}
                <ItemList items={cartItems} />
            </div>

        </div>
       

    );
};
export default Cart;