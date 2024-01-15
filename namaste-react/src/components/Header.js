import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGO } from "../config";
import store from "../utils/store";
import UserContext from "../utils/UserContext";
const logedInUser = () => {
  //API  call to check authentication
  return false;
}

const Title = () => {
  return ( <
    a href = "/" >
    <img data-testid="logo" className = "h-20 p-1"
    alt = "logo"
    src = {LOGO} / >
    </a>
  )
}

const Header = () => {
  const [logedIn, setLogedIn] = useState(false);
  
  const {user} = useContext(UserContext);
  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);
  return ( 
  <div className = "flex w-full justify-between shadow-lg h-20 top-0 left-0 right-0" >
    < div className = "flex justify-start flex-1" >
    <Title />
    </div>
    <div>
      <ul className="flex items-center h-20">
        <li className="px-2"> < Link to = "/" > Home </Link > </li >
        < li className = "px-2"> < Link to = "/about" > About </Link> </li >
        < li className = "px-2" > < Link to = "/contact" > Contact </Link></li >
        < li className = "px-2" > < Link to = "/instamart" > Instamart </Link></li >
         < li className = "px-2" > < Link data-testid = "cart"
         to = "/cart" >Cart-{cartItems.length}items </Link></li >
      </ul > 
    </div >
    < div className = "flex items-center h-20 pl-10 px-2" >
    {user.name}
    {
      //run only Expression not statement
      
      logedIn ? < button className = "p-1 bg-purple-400 rounded-md hover:bg-purple-500 w-14"
      onClick = {
        () => {
          setLogedIn(false)
        }
      } > Logout </button>: 
      < button className = "p-1 bg-purple-400 rounded-md hover:bg-purple-500 w-14"
      onClick = {
        () => {
          setLogedIn(true)
        }
      } > Login </button > 
    }
    </div>
  </div>
  )
}

export default Header;