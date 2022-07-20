import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from "reactstrap";
import { useNavigate } from "react-router-dom";

function HomeNav() {
  let navigate = useNavigate();
  return (
    <>
      {/* Navbar */}
      <Navbar className="" color="dark" dark>
        {/* NavBrand */}
        <NavbarBrand href="/">
          <img
            alt="logo"
            src="gaming.jpg"
            style={{
              height: 40,
              width: 40,
              padding: 6,
            }}
          />
          Team TWO
        </NavbarBrand>
        {/* Nav */}
        <Nav pills>
          <NavItem>
            <NavLink
              href="#"
              onClick={() => {
                navigate("/");
              }}
              activeStyle
            >
              Landing Page
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              onClick={() => {
                navigate("/home");
              }}
              activeStyle
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              onClick={() => {
                navigate("/GameList");
              }}
              activeStyle
            >
              Game List
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
}

export default HomeNav;
