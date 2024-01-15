import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../config";
import { clearCart } from "../utils/cartSlice";

const FoodItem = ({
  name,
  category,
  imageId,
  price
}) => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
      dispatch(clearCart());
  }
  return ( 
  <div > 
    < button className = "p-2 m-5"
    onClick = {
      () => handleClearCart()
    } > Clear Cart </button>
    <img className="w-56 h-64" src={IMG_CDN_URL + imageId }/>
      <div>{name}</div>
      <div>{category}</div>
      <div>{price / 100}</div>
    </div>
  )
}

export default FoodItem;