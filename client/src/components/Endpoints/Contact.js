import React from "react";

export default function Contact() {
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
      <div class="card-header">Contact Us</div>

      <div class="card-body">
        <h5 class="card-title">Monfrigo</h5>
        <span
          className="material-symbols-outlined"
          style={{
            color: "#e75480",
            fontSize: "50px;",
          }}
        >
          soup_kitchen
        </span>
        <p
          class="card-text"
          style={{
            fontSize: "30px;",
          }}
        >
          Email Us at : laura_ek@yahoo.co.uk<br></br> Address: Birmingham, UK.
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
