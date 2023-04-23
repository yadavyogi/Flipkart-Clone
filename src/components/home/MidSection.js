import { imageURL } from "../../constant/data";
import { Grid, styled } from "@mui/material";
import React from "react";

function MidSection() {
  return (
    <Wrapper container spacing={1}>
      {imageURL.map((image) => {
        return (
          <Grid key={Math.random()} item lg={4} md={4} sm={12} cs={12}>
            <img
              src={image}
              alt="Advertisement Images"
              style={{ width: "100%" }}
            />
          </Grid>
        );
      })}
    </Wrapper>
  );
}

export default MidSection;

const Wrapper = styled(Grid)`
  margin-top: 10px;
`;
