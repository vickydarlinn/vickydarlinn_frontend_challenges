import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">your info</Link>
      <Link to="/select-plan">select-plan</Link>
      <Link to="/add-ons">add-ons</Link>
      <Link to="/summary">summary</Link>
    </nav>
  );
};

export default NavBar;
