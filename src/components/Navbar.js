import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <section className="container">
        <Link to="/" className="nav-title">
          Recipe App
        </Link>
        <ul className="nav-link">
          <li>
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="links">
              About
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
