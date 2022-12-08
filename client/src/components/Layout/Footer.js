import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    // <!-- Footer -->
    <footer
      className="text-center text-white "
      style={{
        width: "100%",
        height: "150px",
        backgroundColor: "#C4FA9B",
        fontFamily: "cormorant SC",
      }}
    >
      {/* <!-- Grid container --> */}
      <div
        className="container p-4"
        style={{ backgroundColor: "#C4FA9B", width: "100%", height: "100%" }}
      >
        {/* <!-- Section: Social media --> */}
        <section className="mb-4">
          {/* <!-- Facebook --> */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            style={{ color: "black" }}
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          {/* <!-- Twitter --> */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            style={{ color: "black" }}
          >
            <i className="fab fa-twitter"></i>
          </a>

          {/* <!-- Google --> */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            style={{ color: "black" }}
          >
            <i className="fab fa-google"></i>
          </a>

          {/* <!-- Instagram --> */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            style={{ color: "black" }}
          >
            <i className="fab fa-instagram"></i>
          </a>

          {/* <!-- Linkedin --> */}
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            style={{ color: "black" }}
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          {/* <!-- Github --> */}
          <a
            href="https://github.com/Laura-Kam/Monfrigo/"
            className="btn btn-outline-light btn-floating m-1"
            // role="button"
            style={{ color: "black" }}
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
        {/* <!-- Section: Social media -->

    <!-- Section: Form --> */}
        <section className="">
          <form action="">
            {/* <!--Grid row--> */}
            <div className="row d-flex justify-content-center">
              {/* <!--Grid column--> */}
              <div className="col-auto">
                <p className="pt-2" style={{ color: "black" }}>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              {/* <!--Grid column-->

          <!--Grid column--> */}
              <div className="col-md-5 col-12">
                {/* <!-- Email input --> */}
                <div className="form-outline form-black mb-4">
                  <input
                    type="email"
                    id="form5Example21"
                    className="form-control"
                    style={{ color: "black" }}
                  />
                  <label
                    className="form-label"
                    htmlFor="form5Example21"
                    style={{ color: "black" }}
                  >
                    Email address
                  </label>
                </div>
              </div>
              {/* <!--Grid column-->

          <!--Grid column--> */}
              <div className="col-auto">
                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  className="btn btn-outline-light mb-4"
                  style={{ color: "black" }}
                >
                  Subscribe
                </button>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </form>
        </section>
        {/* <!-- Section: Form --> */}
      </div>
    </footer>
  );
}
