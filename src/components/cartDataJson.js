import { useContext } from "react";
import { global_context } from "./create_context";
import { fetchProduct } from "./fetch_apis";

import React from "react";

export const AddtoCart = (
  productDetails,
  productQuantity,
  cartData,
  setCartData,
  setCartCount
) => {
  setCartData([
    ...cartData,
    { productDetails: productDetails, productQuantity: productQuantity },
  ]);
  setCartCount(cartData.length+1);
  console.log("click funtion............................ ", cartData);
};
