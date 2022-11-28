import React from "react";
import NaviIcon from "./NaviIcon";
import "../navi.css";
import cart from "./images/shopping-cart.png"
import bell from "./images/bell.png"
import user from "./images/user.png"
import {FaShoppingCart} from 'react-icons/fa'

const image = [
  {
    image : 'cart',
  },
  {
    image : 'bell',
  },
  {
    image : user,
  },
];

function NaviIconList (props) {
  return (
    <div id="NaviIconList">
      {image.map((image) => {
        return (
          <NaviIcon key={image} image={image.image}/>
        );
      })}
    </div>
  );
}

export default NaviIconList;