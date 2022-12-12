import React from "react";

export default function LogOutMessage() {
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
      <div
        className="card-header"
        style={{
          fontSize: "16px",
          fontWeight: "3px",
        }}
      >
        You have logged out
      </div>

      <div className="card-body">
        <h4 className="card-title">We hope to see you soon!</h4>
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
      <div className="card-footer text-muted"></div>
    </div>
  );
}
