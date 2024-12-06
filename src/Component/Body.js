import RestaurantCard,{ withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect ,useContext} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
//const [listOfRestaurants, setListOfRestaurants] = useState([]);

const Body = () => {
  // state variable for list of restaurants
 const [listOfRestaurants, setListOfRestaurants] = useState([]);

 const[searchText,setSearchText]=useState([]);
 const[filteredRestaurant,setFilteredRestaurant]=useState([]);

 const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);
 
 //console.log("Body Rendered", listOfRestaurants);

 const {loggedInUser,setUserName}=useContext(UserContext);

 
  useEffect(()=>{
   // console.log("use Effect called");
   fetchData();
  },[]);

  // console.log("body render");

  const fetchData= async ()=>{
    const data= await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
   const json= await data.json();
   console.log(json);
   const restaurants=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;


   if (restaurants) {
    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  }

  };

  const onlineStatus=useOnlineStatus();
  if(onlineStatus=== false) return (<h1>Looks like you're offline !!!! Please check your internet connection</h1>);

  //conditional rendering
  if(listOfRestaurants.length ===0){
    return <Shimmer />

  }

  return (
    <div className="">
      <div className="filter flex">
        <div className="Search m-4 p-4 ">
            <input type="text" className="border border-solid border-black" value={searchText} 
            onChange={(e)=>{
                setSearchText(e.target.value);

            }}/>
            <button className="px-3 py-2 m-4 bg-green-200 rounded-lg"
             onClick={()=>{
                //setSearchText.includes(searchText);
                console.log(searchText);
               const filteredRestaurants= listOfRestaurants.filter(
                (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurants);


            }}
            >Search</button>
        </div>
        <div className="m-4 p-4">
        <button className="px-4 py-2 m-4 bg-sky-200 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );

           setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <label>User Name:</label>
        <input className="m-2 p-2 border border-black rounded-lg" 
        value={loggedInUser}
        onChange={(e)=>setUserName(e.target.value)}/>

        </div>
      
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
           <Link key={restaurant.info.id} 
           to={"/city/bangalore/"+restaurant.info.id}>
            {restaurant.info.veg ? (<RestaurantCardPromoted  resData={restaurant} />
            ) : (
            <RestaurantCard  resData={restaurant} />
          )} 
           </Link>
         // <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
          


        ))}
      </div>
    </div>
  );
};

export default Body;