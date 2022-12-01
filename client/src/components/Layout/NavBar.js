import React from "react";

export default function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light 
    style={{width: 100%,
    }}"
    >
      <div className="container-fluid">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb" style={{ fontFamily: "cormorant SC" }}>
            <li className="breadcrumb-item">
              <a href="#Home">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#library">Your recipes</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <a href="#data">About us</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <a href="#data">Contact us</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <a href="#data">
                <span id="logout">Logout</span>
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </nav>
  );
}
