import RestaurantCard from './RestaurantCard';
import { useState, useContext } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { filterData } from '../utils/utils';
import useOnline from '../utils/useOnline';
import useReataurantsList from '../utils/useRestaurantsList';
import UserContext from '../utils/UserContext';

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, allRestaurants, setFilteredRestaurants] = useReataurantsList();
  const online = useOnline();
  const {user, setUser} = useContext(UserContext);
  
  if(!online){
    return <h1>Offline, please check your internet connection!!</h1>
  }
  if (!allRestaurants) return;

  return allRestaurants.length === 0 ? < Shimmer /> : ( 
    <div className="">
    <div className = "flex">
    <input type = "text" data-testid="search-input"
    className = "h-8 w-60 p-2 mx-2 my-3 sm:h-10 sm:w-60 sm:max-w-xs pl-4 pr-8 text-sm font-normal focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-fg-default rounded-md border"
    placeholder = "Search"
    value = {
      searchText
    }
    onChange = {
      (e) => {
        setSearchText(e.target.value)
      }
    }
    /> <button data-testid="search-btn" className = "my-3 p-1 bg-purple-400 rounded-md hover:bg-purple-500"
    onClick = {
      () => {
        const data = filterData(searchText, allRestaurants);
        setFilteredRestaurants(data);
      }
    } > search </button> 
    < input type = "text"
    className = "h-8 w-60 p-2 mx-2 my-3 sm:h-10 sm:w-60 sm:max-w-xs pl-4 pr-8 text-sm font-normal focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-fg-default rounded-md border"
    value = {
      user.name
    }
    onChange = {
        (e) => {
      setUser({
        ...user,
        name: e.target.value,
      })
    }}/>
    < input type = "text"
    className = "h-8 w-60 p-2 mx-2 my-3 sm:h-10 sm:w-60 sm:max-w-xs pl-4 pr-8 text-sm font-normal focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 text-fg-default rounded-md border"
    value = {
      user.email
    }
    onChange = {
        (e) => {
      setUser({
        ...user,
        email: e.target.value,
        
      })
    }}/>
    </div > < div data-testid="res-list" className = "flex h-[450px] flex-wrap  w-full overflow-y-scroll overflow-auto scroll-smooth" >
     {
      filteredRestaurants.length === 0 ? <h1>No search found!!</h1>:
      filteredRestaurants.map(restaurant => {
        return filteredRestaurants.length === 0? <h1>No search found!!</h1>:(
          <Link to={"/restaurant/"+ restaurant.data.id} key={restaurant.data.id}>
        <RestaurantCard {
          ...restaurant.data
        }
        key = {
          restaurant.data.id
        }
        /></Link > )
      })
    } </div> </div>
  )
}

export default Body;