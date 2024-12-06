import { CDN_URL } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cartSlice";

const ItemList=({items})=>{
    // console.log(items);
    const dispatch = useDispatch();

    const handleAddItem=(item)=>{
      // dispatch(addItem("ice cream"));
      dispatch(addItem(item));
    };
    return( <div>
           {/* Category Items  */}
          {items.map((item)=>(
            <div key={item.card.info.id}
            className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between">
                
                <div className="w-9/12">
                <div className="py-2">
                  <span className="font-semibold">{item.card.info.name}</span>
                  <span className="font-medium"> - ₹ {item.card.info.price ? (item.card.info.price/100 ):(item.card.info.defaultPrice/100)}</span>
                </div>
                <p className="text-s">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
               <div className="absolute">
                  <button className=" p-2 mx-5 rounded-lg text-black bg-white shadow-lg" 
                  onClick={()=>handleAddItem(item)}>
                    Add +
                    </button></div>
            
                  <img src={CDN_URL+item.card.info.imageId} className="w-full m-2"/>
                </div>
             </div>
          ))} 
        </div>
    );
    
};

export default ItemList;