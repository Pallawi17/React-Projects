import { useState, useEffect } from "react";
import { ALL_RESTAURANTS_URL } from "../config";


const useReataurantsList = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);
  
  async function getRestaurants() {
    const data = await fetch(ALL_RESTAURANTS_URL);
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  return [filteredRestaurants, allRestaurants, setFilteredRestaurants];
}

export default useReataurantsList;