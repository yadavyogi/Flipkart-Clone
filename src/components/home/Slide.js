import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";

import React from "react";
import { Typography, Box, Button, styled, Divider } from "@mui/material";
import { Link } from "react-router-dom";

function Slide({ products, pageTitle, isTimer }) {
  return (
    <Component>
      <Deal>
        <Typography
          style={{
            fontSize: "22px",
            fontWeight: "600",
            marginRight: "25px",
            textTransform: "capitalize",
          }}
        >
          {pageTitle}
        </Typography>
        {isTimer && (
          <Timer>
            ⏳ <Countdown date={Date.now() + 2.88e7} renderer={renderer} />
          </Timer>
        )}
        <ViewAll variant="contained" color="primary">
          View All
        </ViewAll>
      </Deal>

      <Divider />

      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        // autoPlay={true}
        // autoPlaySpeed={4000}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map((item) => {
          const { thumbnail, title, discountPercentage, id, category } = item;
          return (
            <Link key={id} to={`product/${id - 1}`}>
              <Box textAlign="center" style={{ padding: "25px 15px" }}>
                <Image src={thumbnail} alt={title} />
                <Text
                  style={{
                    fontWeight: "600",
                    color: "#212121",
                    textTransform: "capitalize",
                  }}
                >
                  {title}
                </Text>
                <Text style={{ color: "green" }}>
                  {discountPercentage} % off
                </Text>
                <Text style={{ color: "#212121", opacity: "0.8" }}>
                  {category}
                </Text>
              </Box>
            </Link>
          );
        })}
      </Carousel>
    </Component>
  );
}

export default Slide;

const Image = styled("img")`
  height: 150px;
  max-width: 180px;
  border-radius: 10px;
`;

const Component = styled(Box)`
  margin-top: 10px;
  background-color: #fff;
`;

const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
  align-items: center;
`;

const Timer = styled(Box)`
  margin-left: 10px;
  font-size: 1.4rem;
  font-weight: 500;
`;

const ViewAll = styled(Button)`
  margin-left: auto;
  border-radius: 2px;
  font-size: 13px;
  background-color: #2874f0;
  font-weight: 600;
`;

const Text = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;

const Completionist = () => <span>Deal of the Over</span>;

const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {hours} : {minutes} : {seconds} Left
      </span>
    );
  }
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
/*
brand: "Apple"
category: "smartphones"
description: "An apple mobile which is nothing like apple"
discountPercentage: 12.96
id: 1
images: Array(5) 
  0: "https://i.dummyjson.com/data/products/1/1.jpg"
  1: "https://i.dummyjson.com/data/products/1/2.jpg"
  2: "https://i.dummyjson.com/data/products/1/3.jpg"
  3: "https://i.dummyjson.com/data/products/1/4.jpg"
  4: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
price: 549
rating: 4.69
stock: 94
thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
title: "iPhone 9"

*/
