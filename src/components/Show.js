import React, { useContext, useEffect, useState } from "react";
import imgs from "./images.jpeg";
import { Link, useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { global_context } from "./create_context";
import { fetchProduct } from "./fetch_apis";
import { AddtoCart } from "./cartDataJson";
import "../App.css";

export default function Show() {
  const {
    setProductID,
    productID,
    productQuantity,
    setProductQuantity,
    productDetails,
    setProductDetails,
    cartData,
    setCartData,
    setCartCount,
  } = useContext(global_context);

  const { id } = useParams();

  useEffect(() => {
    fetchProduct(setProductDetails, id);
  }, []);

  // style={{ width: "70%", height: "100%" }}
  return (
    <div className="container mt-5">
      {productDetails && (
        <div className="d-flex justify-content-center">
          <p>
            Category -{">"} <b>{productDetails?.category}</b>
          </p>
          <div className="m-0 p-0">
            <img
              src={productDetails?.image}
              style={{ width: "60%", height: "90%" }}
            />
          </div>
          <div>
            <h3>{productDetails?.title}</h3>
            {productDetails.rating && (
              <div className="d-flex">
                <ReactStars
                  classNames="container"
                  value={productDetails.rating.rate}
                  count={5}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                  edit={false}
                />
                <p>
                  <u>({productDetails?.rating?.rate})</u>
                </p>
              </div>
            )}
            <h5>{productDetails?.price * productQuantity}$</h5>
            <div className="d-flex">
              <button
                className="btn btn-outline-secondary m-2 count-quantity"
                onClick={() => setProductQuantity(productQuantity + 1)}
              >
                +
              </button>
              <p className="product-quantity">{productQuantity}</p>{" "}
              <button
                className="btn btn-outline-secondary  m-2 count-quantity"
                onClick={() =>
                  setProductQuantity(
                    productQuantity > 1 ? productQuantity - 1 : 1
                  )
                }
              >
                -
              </button>
            </div>
            <button className="btn btn-dark" onClick={() => {
                AddtoCart(
                  productDetails,
                  productQuantity,
                  cartData,
                  setCartData,
                  setCartCount
                );
              }}>Add to Cart</button>
            <hr />
            <p className="blockquote-footer">
              {productDetails?.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
