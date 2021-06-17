import React from "react";
import { Nav, NavIcon, NavLink } from "./NavbarElements";

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavLink to="/">JARDIM DO MORRO</NavLink>
            <NavIcon onClick={toggle}>
            </NavIcon>
        </Nav>
    </>
  );
};

export default Navbar;