import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, restaurantMenu] = useRestaurant(id);
  const dispatch = useDispatch();
  
  const addFoodItem = (item) => {
    dispatch(addItem(item));
}

  return (!restaurant)? <Shimmer />:(
    <div className="w-full h-full">
      <div className="font-bold py-2 px-1">Restaurant id: {id}</div>
      <div className="font-bold text-xl px-1">{restaurant.name}</div>
      <div className="flex">
      <div>
        < img className="h-64 w-72" src = {IMG_CDN_URL + restaurant.cloudinaryImageId}/>
        <div className="flex flex-col px-5">
          <div> {restaurant.areaName} </div>
          <div>{restaurant.city}</div>
          <div> {restaurant.avgRating}stars </div>
          <div> {restaurant.costForTwoMessage} </div>
        </div>
      </div>
    
    <div className="px-5" >
      < ul data-testid="menu"> {
        restaurantMenu[2]?.card?.card?.itemCards?.map(item => (
          <li key={item.card.info.id}> {
           item.card.info.name
          } <button data-testid="addBtn" className="p-1 m-1 bg-green-100" onClick = {
            () => addFoodItem(item.card.info)
          } > Add item </button></li >
          
        ))
      } </ul>
      </div>
      </div>
      </div>
  )
}

export default RestaurantMenu;