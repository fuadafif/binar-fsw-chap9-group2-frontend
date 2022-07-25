import React, { useEffect } from "react";
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./LandingNav.css"

function LandingNav() {

	useEffect(() => {
		const emailKey = localStorage.getItem("email");
		const user = document.getElementById("user");
		const register = document.getElementById("register");
		const login = document.getElementById("login");
		const loginUser = document.getElementById("loginUser");
		if (emailKey) {
			loginUser.innerHTML = `${emailKey}`
			user.hidden = false;
			register.hidden = true;
			login.hidden = true;
		} else {
			register.hidden = false;
			login.hidden = false;
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
					<NavItem hidden id="register">
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
					<NavItem hidden id="login">
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
					<NavItem hidden id="user">
						<NavLink
							id="loginUser"
							href="#"
							onClick={() => {
								navigate("/profile");
							}}
							activeStyle
						>
						</NavLink>
					</NavItem>
				</Nav>

			</Navbar>
		</>
	);
}

export default LandingNav;
