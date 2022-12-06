import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light" style={{ width: "100%" }}>
      <div className="container-fluid">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb" style={{ fontFamily: "cormorant SC" }}>
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/about">About us</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/contact">Contact us</Link>
            </li>
            {Auth.loggedIn() ? (
              <>
                <li className="breadcrumb-item">
                  <Link to="/recipes">Your recipes</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <button
                    style={{
                      border: "none",
                      backgroundColor: "#FBFBFB",
                      color: "#0000008C",
                    }}
                    onClick={() => Auth.logout()}
                  >
                    <span id="logout">Logout</span>
                  </button>
                </li>
              </>
            ) : null}
          </ol>
        </nav>
      </div>
    </nav>
  );
}
