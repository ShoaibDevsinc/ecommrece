import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { useContext } from "react";
import { FaUser, FaLock, FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { global_context } from "./create_context";
import "../App.css";
import React from "react";

function NavBar() {
  const { loginStatus, cartCount } = useContext(global_context);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <NavLink className="text-decoration-none text-light" to="/">
            E-Z Go Conner Store
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-link">
              <NavLink
                className="text-decoration-none text-muted"
                to="/products"
              >
                Products
              </NavLink>
            </Nav.Link>
            <NavDropdown title="Filter" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                electronics
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">jewelery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                men's clothing
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                women's clothing
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="text-decoration-none text-muted ">
              <NavLink className="text-decoration-none text-muted" to="/about">
                About
              </NavLink>
            </Nav.Link>
          </Nav>
          <Nav>
           {loginStatus === true?  <>
           
           <Nav.Link class="btn btn-outline-light">
             <FaShoppingCart />
             <NavLink className="text-decoration-none text-muted" to="/cart">
               <span class="badge bg-dark text-white ms-1 rounded-pill">
               {cartCount}
               </span>
             </NavLink>
           </Nav.Link>
           <Nav.Link>
              <FaLock className="m-1" />
              <NavLink className="text-decoration-none text-muted" to="/login">
               Logout
              </NavLink>
            </Nav.Link>
           </> : <>
            <Nav.Link>
              <FaUser className="m-1" />
              <NavLink
                className="text-decoration-none text-muted"
                to="/register"
              >
                Resgister
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <FaLock className="m-1" />
              <NavLink className="text-decoration-none text-muted" to="/login">
                Sign in
              </NavLink>
            </Nav.Link>
            </>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
