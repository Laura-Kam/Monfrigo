import React from "react";
import FormDialog from "../SignUp/FormDialog";

export default function Header() {
  return (
    <header
      style={{ width: "100%", fontFamily: "cormorant SC", fontWeight: "bold" }}
    >
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
            <div className="text-white h-100">
              <h1 className="mb-3" style={{ color: "black" }}>
                Maifrigo
              </h1>

              <span
                className="material-symbols-outlined"
                style={{
                  color: "#e75480",
                }}
              >
                soup_kitchen
              </span>
              <h5 className="mb-4" style={{ color: "black" }}>
                100% Taste & Zero Waste
              </h5>
              <button
                className="btn btn-outline-light btn-lg m-2"
                rel="noreferrer"
                target="_blank"
                style={{ color: "black" }}
              >
                <FormDialog
                  formProps={{
                    type: "Sign up",
                    info: `To sign up to this website, please enter your username, email address and password here.`,
                  }}
                />
              </button>
              <button
                className="btn btn-outline-light btn-lg m-2"
                rel="noreferrer"
                target="_blank"
                style={{ color: "black" }}
              >
                <FormDialog
                  formProps={{
                    type: "Log in",
                    info: `To log in to this website, please enter your username and password here.`,
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Background image --> */}
    </header>
  );
}
