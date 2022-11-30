import React from "react";

export default function Header() {
  return (
    <header style={{ width: "100%", fontFamily: "cormorant SC" }}>
      {/* <!-- Background image --> */}
      <div
        id="intro-example"
        className="p-5 text-center bg-image"
        style={{
          backgroundColor: "#C4FA9B",
          height: "220px",
        }}
      >
        <div
          className="mask"
          style={{
            backgroundColor: "#C4FA9B",
            height: "290px",
          }}
        >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3" style={{ color: "black" }}>
                Monfrigo
              </h1>
              <h5 className="mb-4" style={{ color: "black" }}>
                100% Taste & Zero Waste
              </h5>
              <a
                className="btn btn-outline-light btn-lg m-2"
                href="https://www.youtube.com/watch?v=c9B4TPnak1A"
                role="button"
                rel="noreferrer"
                target="_blank"
                style={{ color: "black" }}
              >
                Sign Up
              </a>
              <a
                className="btn btn-outline-light btn-lg m-2"
                href="https://mdbootstrap.com/docs/standard/"
                target="_blank"
                role="button"
                rel="noreferrer"
                style={{ color: "black" }}
              >
                Log In
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Background image --> */}
    </header>
  );
}
