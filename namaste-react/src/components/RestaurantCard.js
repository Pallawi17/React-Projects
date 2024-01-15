import { IMG_CDN_URL } from '../config';
import UserContext from '../utils/UserContext';
import { useContext } from 'react';

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating
}) => {
  // const {name, cuisines,cloudinaryImageId, avgRating} = restaurant.data;
  const {user} = useContext(UserContext);
  return ( 
    <div className = "w-56 h-64 p-3 m-3 shadow-lg hover:border hover:border-purple-300" >
    <img src = {
      IMG_CDN_URL+
      cloudinaryImageId
    }/> 
    <div className="font-bold text-lg p-1"> {
    name.slice(0,18)+ '...'
  } </div>
  <div className="text-sm opacity-50"> {
    cuisines.join(", ")
  } </div> 
  <div > {
    avgRating + " "
  }
  stars </div> 
  <div>{user.name} - {user.email}</div>
  </div >
)
}


export default RestaurantCard;