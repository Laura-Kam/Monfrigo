// import React from "react";
import "../../css/Carousel.css";
import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function Carousel() {
  return (
    <MDBCarousel
      showControls
      showIndicators
      style={{
        height: "320px",
        width: "370px",
        fontFamily: "cormorant SC",
        color: "#CF4A72",
        margin: "20px",
        rounded: "10px",
      }}
    >
      <MDBCarouselItem
        className="w-100 d-block square bg-primary rounded-5"
        itemId={1}
        src="https://images.unsplash.com/photo-1613660635034-b7a09ae11463?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
        alt="..."
        style={{
          height: "350px",
          width: "450px",
          rounded: "10px",
        }}
      >
        <p
          style={{
            color: "#CF4A72",
          }}
        >
          Our Recipes
        </p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block square bg-primary rounded-5"
        itemId={2}
        src="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMHdoaXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="..."
        style={{
          height: "350px",
          width: "450px",
          rounded: "10px",
        }}
      ></MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block square bg-primary rounded-5"
        itemId={3}
        src="https://images.unsplash.com/photo-1468218620578-e8d78dcda7b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="..."
        style={{
          height: "350px",
          width: "450px",
          rounded: "10px",
        }}
      ></MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block square bg-primary rounded-5"
        itemId={4}
        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        alt="..."
        style={{
          height: "350px",
          width: "450px",
          rounded: "10px",
        }}
      ></MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block square bg-primary rounded-5"
        itemId={5}
        src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNob2NvbGF0ZSUyMG1vdXNzZSUyMGNha2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt="..."
        style={{
          height: "350px",
          width: "450px",
          rounded: "10px",
        }}
      >
        <p
          style={{
            color: "#CF4A72",
          }}
        ></p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
