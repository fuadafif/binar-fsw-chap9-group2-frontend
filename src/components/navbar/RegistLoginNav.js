import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

function RegistLoginNav() {
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
      </Navbar>
    </>
  );
}

export default RegistLoginNav;
