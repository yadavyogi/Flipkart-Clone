import React from "react";
import classes from "./ItemDetails.module.css";
import RenderItems from "./RenderItems";

function ItemDetails(props) {
  const { items } = props.cart;

  return (
    <div className={classes.wrapper}>
      <h1>Your Shopping Cart</h1>
      <div className={classes["items-container"]}>
        {items.map((item) => {
          return <RenderItems item={item} key={item.key} />;
        })}
      </div>
    </div>
  );
}

export default ItemDetails;
