import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  return (
    <nav>
      <h2>🌿 Paradise Nursery</h2>
      <div>
        <Link to="/plants">Plants</Link> |{" "}
        <Link to="/cart">Cart ({cartCount})</Link> |{" "}
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
