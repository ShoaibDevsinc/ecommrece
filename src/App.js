import React, { useEffect, useState } from "react";
import NavBar from "./components/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { global_context } from "./components/create_context";
import { fetchProducts, fetchProduct } from "./components/fetch_apis";
import Products from "./components/Products";
import Routers from "./components/Routers";

function App() {
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState({});

  const [cartData, setCartData] = useState([]);

  const [productID, setProductID] = useState(0);
  const [productQuantity, setProductQuantity] = useState(1);

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [totalProductPrice, setTotalProductPrice] = useState(0);

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  return (
    <div className="App">
      <global_context.Provider
        value={{
          products,
          setProductID,
          productID,
          productQuantity,
          setProductQuantity,
          email,
          setEmail,
          pass,
          setPass,
          loginStatus,
          setLoginStatus,
          cartCount,
          productDetails,
          setProductDetails,
          setCartCount,
          cartData,
          setCartData,
          totalProductPrice,
          setTotalProductPrice,
        }}
      >
        <Routers />
      </global_context.Provider>
    </div>
  );
}

export default App;
