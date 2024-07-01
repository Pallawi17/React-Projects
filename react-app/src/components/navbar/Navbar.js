import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import 'font-awesome/css/font-awesome.min.css';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
   const handleClick = () => {
     setClicked(!clicked);
   }

  const menuItem = MenuItems.map(({url, title, key}) => {
    return(
      <li key={key}>
        <NavLink to={url} activeclassname="active">{title}</NavLink>
      </li>
    )
  });
 
  return(
    <nav>
      <div className="logo">
        VPN<font>Lab</font>
      </div>
      <div className="menu-icon" onClick={handleClick}>
       <i className={clicked?"fa fa-times": "fa fa-bars"}></i>
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>
        {menuItem}
      </ul>
    </nav>
  )
}

export default Navbar;
