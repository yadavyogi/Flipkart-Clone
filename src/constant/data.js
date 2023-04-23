export const navData = [
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
    text: "Top Offers",
  },
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
    text: "Grocery",
  },
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
    text: "Mobile",
  },
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",
    text: "Fashion",
  },
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    text: "Electronics",
  },
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100",
    text: "Home",
  },
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
    text: "Appliances",
  },
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
    text: "Travel",
  },
  {
    url: "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
    text: "Beauty, Toys & More",
  },
];

export const bannerData = [
  {
    id: 4,
    url: "https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50",
  },
  {
    id: 2,
    url: "https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50",
  },
  {
    id: 3,
    url: "https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50",
  },
  {
    id: 1,
    url: "https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50",
  },
];

export const imageURL = [
  "https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg",
  "https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50",
];

export const url =
  "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";

export const fassured =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

export const adURL =
  "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

export const imgurl =
  "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

export const bankOffer = [
  { id: 1, offer: "Bank Offer5% Cashback on Flipkart Axis Bank Card" },
  {
    id: 2,
    offer: "Special PriceGet extra 3% off (price inclusive of cashback/coupon)",
  },
  { id: 3, offer: "Buy this Product and Get Extra ₹500 Off on Two-WheelersT" },
  {
    id: 4,
    offer:
      "Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500*",
  },
  { id: 5, offer: "No cost EMI ₹6,666/month. Standard EMI also available" },
  {
    id: 6,
    offer:
      "Partner OfferBuy this product and get upto ₹500 off on Flipkart Furniture",
  },
  {
    id: 7,
    offer:
      "Partner OfferPurchase now & get a surprise cashback coupon till November 2023",
  },
  {
    id: 8,
    offer: "Buy this Product & Get Extra 5% Off on DIGITEK DTR 550 LW Tripod",
  },
];

export function formatAmount(amount) {
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  });

  return formatter.format(amount);
}
