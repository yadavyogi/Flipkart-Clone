import { productActions } from "./product-slice";

export function getProducts() {
  return async function (dispatch) {
    async function getData() {
      const response = await fetch(
        "https://product-data-api-dfa74-default-rtdb.firebaseio.com/productdata.json"
      );

      if (!response.ok) {
        throw new Error("Cannot fetch products data from the API");
      }

      const data = await response.json();

      dispatch(productActions.setData(data));
    }

    try {
      await getData();
    } catch (error) {
      console.error(error.message);
      dispatch(productActions.setError(true));
    }
  };
}
