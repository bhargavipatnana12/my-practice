import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbarp = () => {
  return (
    <div>
      <Navbar>
        <Link to="/" style={{ marginRight: 500 }}>
          HOME
        </Link>
        <Link to="/dashboard" style={{ marginRight: 800 }}>
          DASHBOARD
        </Link>
        <Link to="/about" style={{ marginRight: 400 }}>
          ABOUT
        </Link>
      </Navbar>
    </div>
  );
};

export default Navbarp;
