import { Button } from "@mui/material";
import React, { useState } from "react";
import classes from "./ActionItem.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { cartActions } from "../../store/cart/cart-slice";
import { useDispatch } from "react-redux";

function ActionItem(props) {
  const { id, title, price, discountPercentage, images, thumbnail } =
    props.product;

  const [currImageIdx, setCurrImage] = useState(0);

  function imageClickHandler(idx) {
    setCurrImage(idx);
  }

  const dispatch = useDispatch();

  function addItemToCartHandler() {
    dispatch(
      cartActions.addItemToCart({
        id,
        price,
        totalPrice: price,
        quantity: 1,
        title,
        discountPercentage,
        thumbnail,
      })
    );
  }

  return (
    <main className={classes.image_side}>
      <div className={classes.images_box}>
        {images.map((currImage, idx) => {
          return (
            <img
              src={currImage}
              alt="Product"
              key={idx}
              onClick={() => imageClickHandler(idx)}
              style={
                idx === currImageIdx ? { border: "4px solid #2874f0" } : {}
              }
            />
          );
        })}
      </div>

      <img
        src={images[currImageIdx]}
        alt="Product"
        className={classes.main_img}
      />

      <div classes={classes.btn_action} style={{ display: "flex" }}>
        <span style={{ marginRight: "2rem" }}>
          <Button
            onClick={addItemToCartHandler}
            style={{
              background: "#ff9f00",
              width: "100%",
              fontSize: "1rem",
            }}
            variant="contained"
          >
            <ShoppingCartIcon /> &nbsp; Add to Cart
          </Button>
        </span>
        <span>
          <Button
            style={{
              background: "#fb541b",
              width: "100%",
              fontSize: "1rem",
            }}
            variant="contained"
          >
            <FlashOnIcon />
            &nbsp;Buy Now
          </Button>
        </span>
      </div>
    </main>
  );
}

export default ActionItem;

/*
  {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },

*/
