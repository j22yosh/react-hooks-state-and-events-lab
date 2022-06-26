import React, { useState } from "react";

function Item({ name, category }) {
   
      const [cart, setCart ] = useState(true)
      const cartStatus = cart ? "" : "in-cart";
    const addRemove = cart ? "Remove From Cart" : "Add to cart" ;
     return (
  
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={() => setCart(!cart)} className="add">{addRemove}</button>
    </li>
  );
}

export default Item;
