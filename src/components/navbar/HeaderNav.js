import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from "reactstrap";
import { useNavigate } from "react-router-dom";

function HeaderNav() {
  let navigate = useNavigate();
  return (
    <>
      {/* Navbar */}
      <Navbar className="my-2" color="dark" dark>
        {/* NavBrand */}
        <NavbarBrand href="/">
          <img
            alt="logo"
            src="../logo"
            style={{
              height: 40,
              width: 40,
            }}
          />
          FSW-CHAP9-GROUP2
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
                navigate("/signup");
              }}
              activeStyle
            >
              Register
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              onClick={() => {
                navigate("/login");
              }}
              activeStyle
            >
              Login
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

export default HeaderNav;
