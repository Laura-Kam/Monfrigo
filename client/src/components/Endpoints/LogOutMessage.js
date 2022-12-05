import React from "react";

export default function LogOutMessage() {
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
      <div class="card-header">You have logged out</div>

      <div class="card-body">
        <h5 class="card-title">We hope to see you soon!</h5>
        <span
          className="material-symbols-outlined"
          style={{
            color: "#e75480",
            fontSize: "50px;",
          }}
        >
          soup_kitchen
        </span>
      </div>
      <div class="card-footer text-muted"></div>
    </div>
  );
}
