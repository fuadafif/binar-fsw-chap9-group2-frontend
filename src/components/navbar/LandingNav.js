import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from "reactstrap";
import { useNavigate } from "react-router-dom";
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
}

export default LandingNav;
