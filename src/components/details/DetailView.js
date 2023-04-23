import React from "react";
import { useParams } from "react-router-dom";
import ActionItem from "./ActionItem";
import { fassured } from "../../constant/data";
import data from "../../store/hardcoded/ProductsData";
import classes from "./DetailView.module.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { bankOffer } from "../../constant/data";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import TableSection from "./TableSection";
import { formatAmount } from "../../constant/data";

function DetailView() {
  const { id } = useParams();
  const product = data[id];

  return (
    <section className={classes["product-page"]}>
      <div>
        <ActionItem product={product} />
      </div>

      <div className={classes.detail_page}>
        <h2 style={{ textTransform: "capitalize" }}>{product.title}</h2>

        <div className={classes.description}>{product.description}</div>

        <div className={classes.rating_assured}>
          <div className={classes.rating}>
            {product.rating.toFixed(1)} <StarBorderIcon />
          </div>

          <div className={classes.reviews}>516 Ratings & 72 Reviews</div>

          <div className={classes.image_assured}>
            <img src={fassured} alt="Flipkart Assured" />
          </div>
        </div>

        <div className={classes.price_section}>
          <div className={classes.special_price}>Special Price</div>

          <div className={classes.prices}>
            <div className={classes.real_price}>
              {formatAmount((product.price * 80).toFixed(0))}
            </div>

            <div>
              <strike className={classes.strike}>
                {formatAmount(
                  (
                    product.price * 80 +
                    product.price * 80 * (product.discountPercentage / 100)
                  ).toFixed(0)
                )}
              </strike>
            </div>

            <div className={classes.discount_percent}>
              {product.discountPercentage.toFixed(0)}% off
            </div>
          </div>
        </div>

        <div className={classes.alert}>
          Hurry, only {product.stock} items remaining
        </div>

        <div className={classes.bank_offer}>
          <h3>Available offers</h3>
          <div>
            {bankOffer.map((offer) => {
              return (
                <div key={offer.id} className={classes.offers}>
                  <LocalOfferIcon style={{ color: "green" }} /> &nbsp;{" "}
                  {offer.offer}
                </div>
              );
            })}
          </div>
        </div>

        <TableSection />
      </div>
    </section>
  );
}

export default DetailView;
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
