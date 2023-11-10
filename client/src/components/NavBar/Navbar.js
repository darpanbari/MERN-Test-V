import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../NavBar/Navbar.css";
import Logout from "../Auth/Logout";

function TopNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar shadow-sm position-sticky top-0">
      <Container>
        <Navbar.Brand className="text-white fw-bold">DASHBOARD</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-white"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav >
            <NavLink to="/all-customers" className="nav-link" activeClassName="active-link">
              Active Customers
            </NavLink>
            <NavLink to="/get-transactions" className="nav-link" activeClassName="active-link">
              Account Ids
            </NavLink>
            <NavLink to="/get-accounts-products" className="nav-link" activeClassName="active-link">
              Products
            </NavLink>
            <NavLink className="ms-4" activeClassName="active-link"><Logout/></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
