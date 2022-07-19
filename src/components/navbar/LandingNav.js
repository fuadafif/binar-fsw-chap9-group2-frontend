import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from "reactstrap";
import { useNavigate } from "react-router-dom";


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
								navigate("/signup");
							}}
							activeStyle >
							Register
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							href="#"
							onClick={() => {
								navigate("/login");
							}}
							activeStyle >
							Login
						</NavLink>
					</NavItem>
				</Nav>
			</Navbar>
		</>
	);
}

export default LandingNav;