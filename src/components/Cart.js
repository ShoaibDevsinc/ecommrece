import React, { useContext } from "react";
import imgs from "./images.jpeg";
import { global_context } from "./create_context";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Cart() {
  const {
    setProductID,
    productID,
    productQuantity,
    setProductQuantity,
    productDetails,
    setProductDetails,
    setCartData,
    setCartCount,
    cartCount,
    totalProductPrice,
    setTotalProductPrice,

    cartData,
  } = useContext(global_context);

  // const totalPrice = (
  //   cartData,
  //   totalProductPriceState,
  //   setTotalProductPrice
  // ) => (
  //   cartData.map(
  //     (data, totalProductPrice = 0) => (
  //       (totalProductPrice =
  //         data.productDetails.price * data.productQuantity + totalProductPrice),
  //       console.log(
  //         "***********->",
  //         totalProductPrice,
  //         "------- quantity---------",
  //         data.productQuantity,
  //         "------- price----------",
  //         data.productDetails.price
  //       ),
  //       cartData.length >= 0 ? setTotalProductPrice(totalProductPrice) : 0,
  //       console.log(
  //         "cart data ke length remove krna ka bad....",
  //         cartData.length
  //       )
  //     )
  //   ),
  //   (<h3>{totalProductPriceState}</h3>)
  // );

  const totalPrice = (
    cartData,
    totalProductPrice,
    setTotalProductPrice,
    totalCartPrice = 0,
    total = 0
  ) => {
    console.log(
      "---------------------------total price--------------------------------------------"
    );
    return cartData.length === 0
      ? 0
      : cartData.map((data) => {
          debugger;
          totalCartPrice = data.productDetails.price * data.productQuantity;
          total = totalCartPrice + totalProductPrice;
          console.log(total);
        });
    setTotalProductPrice(total);

    console.log(
      "---------------------------end total price--------------------------------------------"
    );
  };

  totalPrice(cartData, totalProductPrice, setTotalProductPrice);

  const cartDataShow = cartData.map((data, count = 0) => (
    <>
      <tr className="m-5" key={count + 1}>
        <td>{count + 1}</td>
        <td className="m-5">
          <div>
            <div className="d-flex flex-row">
              <img
                style={{ width: "12%", height: "12%" }}
                src={data.productDetails.image}
                alt="BigCo Inc. logo"
              />
              <Link
                to={`/show/${data.productDetails.id}`}
                className="text-decoration-none text-dark font-weight-bold"
              >
                <h4>{data.productDetails.title.substring(0, 30)}....</h4>
              </Link>
            </div>
          </div>
        </td>
        <td>{data.productDetails.price * data.productQuantity}</td>
        <td>
          <div className="">
            <p className="product-quantity">{data.productQuantity}</p>{" "}
          </div>
        </td>
        <td>
          <AiFillDelete
            onClick={() => {
              console.log("deleteed");
              cartData.splice(count, 1);
              setCartCount(cartCount - 1);
            }}
            className="ms-1 pe-auto"
            color="red"
            icon="camera"
            size="3em"
          />
        </td>
      </tr>
    </>
  ));
  return (
    <div>
      <table class="table container">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product </th>
            <th scope="col">Price </th>
            <th scope="col">Quantity</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>

        {cartDataShow}
      </table>
      <hr />
      <div className="container d-flex justify-content-between">
        <h2>Total Price:</h2>
        {/*totalPrice(cartData, totalProductPrice, setTotalProductPrice)*/}
        <button className="btn btn-success">Confirm Order</button>
      </div>
    </div>
  );
}
