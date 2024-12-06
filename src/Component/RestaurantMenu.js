import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import ResCategory from "./ResCategory";


const RestaurantMenu=()=>{

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
   

   if (resInfo === null) return <Shimmer />;

const { name, cuisines, avgRatingString,costForTwoMessage } = resInfo?.cards?.[2]?.card?.card?.info || {};

const {itemCards}=resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

const categories=resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>
        c.card?.card?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);
//console.log(categories);

return (
    <div className="text-center">
       
        <h2 className="font-bold text-2xl my-6">{name}</h2>
        <h3 className="text-lg font-bold">{cuisines.join(",")} - {costForTwoMessage}</h3> 
        {/* categories */}
        {categories.map((category)=>(
            <ResCategory key={category?.card?.card?.title} data={category?.card?.card} />
        ))}
       

    </div>
);

};
export default RestaurantMenu;