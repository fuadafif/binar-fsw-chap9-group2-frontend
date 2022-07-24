import React, { useEffect } from "react";
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./LandingNav.css"

function LandingNav() {

	useEffect(() => {
		const emailKey = localStorage.getItem("email");
		const user = document.getElementById("user");
		const nav = document.getElementById("nav");
		if (emailKey) {
			user.innerHTML = `${emailKey}`
			user.hidden = false;
			nav.hidden = true;
		} else {
			nav.hidden = false;
			user.hidden = true;
		}

	})


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
				<div className="test">
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
					<Nav hidden id="user">
					<NavItem>
						<NavLink
							href="#"
							onClick={() => {
								navigate("/home");
							}}
							activeStyle
						>
						</NavLink>
					</NavItem>
					</Nav>

				</div >
				<Nav hidden id="nav">
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
