import {CDN_URL} from "../Utils/constants";
import { useContext} from "react";
import UserContext from "../Utils/UserContext";


// const styleCard={
//     backgroundColor:"#f0f0f0"
//  }
const RestaurantCard=(props)=>{
    const {resData}=props;

    // console.log(resData);

    const {loggedInUser}=useContext(UserContext);
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime,
        sla,
    }= resData?.info;



   
     return(
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            {/* <img className="res-logo" alt="res-logo" src={CDN_URL}/> */}
            <img className="rounded-lg" 
            alt="res-logo" 
            src={CDN_URL + cloudinaryImageId}
            />
            <h3 className="font-bold py-4 text-lg">{name}</h3> 
            <h4>{cuisines.join(", ")}</h4> 
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
            <h4>{loggedInUser}</h4>
             </div>

    );
};

export const withPromotedLabel=(RestaurantCard)=>{
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-1 rounded-md">PureVeg</label>
                <RestaurantCard {...props}/>
            </div>

        );
    };
}
export default RestaurantCard;