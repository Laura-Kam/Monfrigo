import React from "react";
import "../../css/Carousel.css";

const Carousel = () => {
  return (
    // <!-- Carousel wrapper -->
    <div
      id="carouselMaterialStyle"
      class="carousel slide carousel-fade"
      data-mdb-ride="carousel"
      style={{
        height: "500px",
        width: "400px",
        fontFamily: "cormorant SC",
        color: "#CF4A72",
        margin: "20px",
      }}
    >
      {/* <!-- Indicators --> */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-mdb-target="#carouselMaterialStyle"
          data-mdb-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselMaterialStyle"
          data-mdb-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselMaterialStyle"
          data-mdb-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* <!-- Inner --> */}
      <div className="carousel-inner rounded-5 shadow-4-strong">
        {/* <!-- Single item --> */}
        <div className="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1613660635034-b7a09ae11463?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
            className="d-block w-100"
            alt="Sunset Over the City"
          />
          <div className="carousel-caption d-none d-md-block">
            <p
              style={{
                color: "#CF4A72",
              }}
            >
              Our Recipes
            </p>
          </div>
        </div>

        {/* <!-- Single item --> */}
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1513442381178-5cde86b936fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="d-block w-100"
            alt="Canyon at Nigh"
          />
          <div className="carousel-caption d-none d-md-block">
            <p
              style={{
                color: "#CF4A72",
              }}
            >
              Our Recipes
            </p>
          </div>
        </div>

        {/* <!-- Single item --> */}
        <div className="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1552320764-9fc870798a3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            className="d-block w-100"
            alt="Cliff Above a Stormy Sea"
          />
          <div className="carousel-caption d-none d-md-block">
            <p
              style={{
                color: "#CF4A72",
              }}
            >
              Our Recipes
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Inner --> */}

      {/* <!-- Controls --> */}
      <button
        className="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselMaterialStyle"
        data-mdb-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span
          className="visually-hidden"
          style={{
            color: "#CF4A72",
          }}
        >
          Previous
        </span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-mdb-target="#carouselMaterialStyle"
        data-mdb-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span
          className="visually-hidden"
          style={{
            color: "#CF4A72",
          }}
        >
          Next
        </span>
      </button>
    </div>
    // <!-- Carousel wrapper -->
  );
};

export default Carousel;
