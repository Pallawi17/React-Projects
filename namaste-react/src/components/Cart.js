import {
  useSelector
} from "react-redux";
import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector(store => 
    store.cart.items
  );
  console.log(cartItems);
  return(
    <div>
      < div > Cart- {cartItems.length}  </div>
      <div className="flex flex-wrap">
      {
        cartItems.map(item => (< FoodItem key={item.id} {...item}
      />))}
      </div>
    </div>
  )
}

export default Cart;