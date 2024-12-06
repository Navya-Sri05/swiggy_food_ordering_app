import ItemList from "./ItemList";
import {useState} from "react";

const ResCategory=({data})=>{

   const [showItems,setShowItems]=useState(false);


    const handleClick=()=>{
    //  console.log("clicked");
     setShowItems(!showItems);
    };
   return (
        <div>
            {/* header */}
            <div className="w-6/12 bg-gray-100 p-4 shadow-lg mx-auto my-4 ">
            
            <div className=" flex justify-between cursor-pointer"
            onClick={handleClick}>
             <span className="font-bold text-lg">{data.title}{""}
                ({data.itemCards.length})
            </span>
            <span>{" ⬇ "}</span>
            </div>
            
          {/* {/* {showItems &&   */}
         {/* {showItems && <ItemList items={data.itemCards} />}  */}
        { showItems && <ItemList items={data.itemCards} />}
         </div>
          
           
        </div>

    );
  

};
export default ResCategory;
