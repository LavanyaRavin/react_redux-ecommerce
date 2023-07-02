import React from "react";
import "./Navbars.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import {  useSelector } from "react-redux";


function Navbars() {

  const state = useSelector((state)=>state.handleCart)
  return (
    <>
      {/* <nav class="navbar navbar-expand-lg navbar-dark " id="navbar">
        <div class="container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe5gpcu7m956sZJgot0cGq1cPNStT8EhVS8g&usqp=CAU"
            alt=""
            class="img-fluid "
            style={{ borderRadius: "50%", width: "50px", marginLeft: "10px" }}
          />
          <a style={{ margin: "8px" }} class="navbar-brand" href="#">
            Stylish Girl
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-expanded="true"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto ">
              <li class="nav-item">
                <a class="nav-link " href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#product">
                  Products
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  About
                </a>
              </li>
            </ul>

            <div className="button ">
              <a href="" className="btn ">
                <i className="fa fa-sign-in me-2"></i>Login
              </a>
              <a href="" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-2"></i>Register
              </a>
              <a href="" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-2"></i>Cart(0)
              </a>
            </div>
          </div>
        </div>
      </nav> */}





    <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark" id="navbar">
      <Container>
        
        <div class="brand">
      <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe5gpcu7m956sZJgot0cGq1cPNStT8EhVS8g&usqp=CAU"
            alt=""
            class="img-fluid "
            style={{ borderRadius: "50%", width: "50px", marginLeft: "10px" }}
          />
        <Navbar.Brand to="/"> Stylish </Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto menu">

          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/products">
            <Nav.Link>Product</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/about">
            <Nav.Link to="/about">About</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/contact">
            <Nav.Link to="/contact">Contact</Nav.Link>
            </LinkContainer>
          </Nav>

          <div className="button ">

            {/* <LinkContainer to="/login">
              <Nav.Link className="btn p-2">
                <i className="fa fa-sign-in me-2 "></i>Login
              </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/register">
              <Nav.Link className="btn btn-outline-dark ms-2 p-2">
                <i className="fa fa-user-plus me-2"></i>Register
              </Nav.Link>
              </LinkContainer> */}

              <LinkContainer to="/cart">
              <Nav.Link  className="btn btn-outline-dark ms-2 p-2">
                <i className="fa fa-shopping-cart me-2"></i>Cart({state.length})
              </Nav.Link>
              </LinkContainer>

            </div>
            

        </Navbar.Collapse>
      </Container>
    </Navbar>
  



    </>
  );
}

export default Navbars;
