import React from "react";

export default function About() {
  return (
    <div
      className="card text-center"
      style={{
        border: "5px",
        backgroundColor: "white",
        borderColor: "#FFE7E9",
        fontFamily: "cormorant CS",
      }}
    >
      <div className="card-header">About Us</div>

      <div className="card-body">
        <h4
          className="card-title"
          style={{
            fontSize: "55px;",
          }}
        >
          Maifrigo
        </h4>
        <span
          className="material-symbols-outlined"
          style={{
            color: "#e75480",
          }}
        >
          soup_kitchen
        </span>
        <p className="card-text" style={{ fontSize: "16px", fontWeight: "3px" }}>
          We are a small company of five like-minded people, with a passion for
          delicious food and zero-waste.<br></br>
          We were founded in 2022 following discussions with users, who were
          hungry for a smart recipe app, <br></br>using all those spare bits of
          food in your fridge.
        </p>
        <a
          href="/"
          className="btn btn-primary"
          style={{
            backgroundColor: "#FFE7E9",
            color: "black",
            fontFamily: "cormorant CS",
          }}
        >
          Search for your next recipe
        </a>
      </div>
      <div className="card-footer text-muted"></div>
    </div>
  );
}
