// import React from "react";
import "../../css/Carousel.css";
import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function Carousel({ visible }) {
  const handleVisible = () => {
    return visible ? "block" : "none";
  };
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
        display: handleVisible(),
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
        src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1lYXQlMjBkaXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
