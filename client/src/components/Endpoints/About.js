import React from "react";

export default function About() {
  return (
    <div
      class="card text-center"
      style={{
        border: "5px",
        backgroundColor: "white",
        borderColor: "#FFE7E9",
        fontFamily: "cormorant CS",
      }}
    >
      <div class="card-header">About Us</div>

      <div class="card-body">
        <h5
          class="card-title"
          style={{
            fontSize: "50px;",
          }}
        >
          Maifrigo
        </h5>
        <span
          className="material-symbols-outlined"
          style={{
            color: "#e75480",
          }}
        >
          soup_kitchen
        </span>
        <p class="card-text">
          We are a small company of five like-minded people, with a passion for
          delicious food and zero-waste.<br></br>
          We were founded in 2022 following discussions with users, who were
          hungry for a smart recipe app, <br></br>using all those spare bits of
          food in your fridge.
        </p>
        <a
          href="/"
          class="btn btn-primary"
          style={{
            backgroundColor: "#FFE7E9",
            color: "black",
            fontFamily: "cormorant CS",
          }}
        >
          Search for your next recipe
        </a>
      </div>
      <div class="card-footer text-muted"></div>
    </div>
  );
}
