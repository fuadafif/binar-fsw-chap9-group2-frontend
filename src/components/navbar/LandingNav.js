import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from "reactstrap";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import "./LandingNav.css"

function LandingNav() {
	let navigate = useNavigate();
	return (
		<>
			{/* Navbar */}
			<Navbar className="" color="dark" dark="true">
				{/* NavBrand */}
				<NavbarBrand href="/">
					<img
						alt="logo"
						src="gaming.jpg"
						style={{
							height: 50,
							width: 50,
							padding: 6,
							marginRight: 6,
						}}
					/>
					Team T2
				</NavbarBrand>
				{/* Nav */}
				<Nav>
					<NavItem>
						<NavLink
							href="#"
							onClick={() => {
								navigate("/register");
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
				</Nav>
			</Navbar>
		</>
	);
=======

function LandingNav() {
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
                navigate("/register");
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
        </Nav>
      </Navbar>
    </>
  );
>>>>>>> ca33d3dd3a4d41ee772262eb7ebe24e28ef8fb8f
}

export default LandingNav;
