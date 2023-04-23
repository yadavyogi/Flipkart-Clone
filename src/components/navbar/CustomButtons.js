import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import { ShoppingCart } from "@mui/icons-material/";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatAmount } from "../../constant/data";

function CustomButtons() {
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  function loginHandler() {
    loginWithRedirect();
  }

  const { totalQuantity, totalCartPrice } = useSelector((state) => state.cart);

  return (
    <Wrapper>
      {!isAuthenticated && !isLoading && (
        <LoginButton variant="contained" onClick={loginHandler}>
          Login
        </LoginButton>
      )}

      {isLoading && <Typography>Loading...</Typography>}

      {isAuthenticated && <Profile name={user.name} isLoading={isLoading} />}

      <Typography style={{ width: "140px" }}>Become a Seller</Typography>

      <Typography>More</Typography>

      <Link
        to={isAuthenticated ? "/cart" : "/"}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <Container>
          <ShoppingCart />
          <Typography style={{ display: "flex", alignItems: "center" }}>
            Cart
            <span
              style={{
                marginLeft: "0.6rem",
                display: "flex",
                gap: "0.6rem",
                borderRadius: "10px",
                width: "12rem",
              }}
            >
              <span
                style={{
                  // backgroundColor: "#e6000e",
                  backgroundColor: "#143a78",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "50px",
                }}
              >
                {totalQuantity}
              </span>
              <span
                style={{
                  backgroundColor: "#005a16",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "50px",
                }}
              >
                {formatAmount(totalCartPrice * 80)}
              </span>
            </span>
          </Typography>
        </Container>
      </Link>
    </Wrapper>
  );
}

export default CustomButtons;

// const Wrapper = styled(Box)`
//   display: flex;
//   align-items: center;
//   margin: 0 3% 0 auto;
//   & > button,
//   & > p,
//   & > div {
//     margin-right: 40px;
//   }
// `;

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: "0 3% 0 auto",
  "& > *": {
    marginRight: "40px !important",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}));

const LoginButton = styled(Button)`
  color: #2874f0;
  background-color: #fff;
  padding: 5px 30px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  &:hover {
    background-color: #7eacf6;
    color: #fff;
  }
`;
