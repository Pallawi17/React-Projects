import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  useEffect(() => {
    getRestaurantInfo()
  }, []);
 
 async function getRestaurantInfo() {
   const url = FETCH_MENU_URL.replace("{id}", id)
   const data = await fetch(url);
   const json = await data.json();
   setRestaurant(json?.data?.cards[0]?.card?.card?.info);
   setRestaurantMenu(json?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
 }
 return [restaurant, restaurantMenu];
}

export default useRestaurant;