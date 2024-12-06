import {LOGO_URL} from "../Utils/constants";
import {useState,useEffect,useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";


const Header=()=>{
    const [btnNameReact,setBtnNameReact]=useState("Login");
    const onlineStatus = useOnlineStatus();

    const {loggedInUser}=useContext(UserContext);
    // const data=useContext(UserContext);
    // console.log(data);

    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems);

    return(
    <div className="flex  justify-between bg-pink-100 shadow-lg m-2 sm:bg-yellow-100 lg:bg-green-100 ">
        <div>
            {/* <img className="logo" src={LOGO_URL}/> */}
            <img className="w-48" src={LOGO_URL}/>
        </div>
        <div className="flex items-center" >
            <ul className="flex px-4 m-4">
                <li className="px-4">Online Status:{onlineStatus ? "yes": "offline"}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                <li className="px-4 font-bold"><Link to="/cart">Cart -({cartItems.length} items)</Link></li>
                <li className="px-4">
                    <Link to="/grocery">
                    Grocery</Link></li>
                <button className="login-btn"
                 onClick={()=>{
                     btnNameReact==="Login"  
                     ? setBtnNameReact("Logout")
                     :setBtnNameReact("Login");
                }}>
                    {btnNameReact}
                    </button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
            </ul>
        </div>

    </div>
    );
 }
 export default Header;