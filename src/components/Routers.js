import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./nav";

import About from "./About";
import Products from "./Products";
import Show from "./Show";
import Cart from "./Cart";
import Register from "./Register";
import Login from "./Login";

export default function Routers() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/show/:id" element={<Show />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
