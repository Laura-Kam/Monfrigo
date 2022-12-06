import React from "react";
// import Card from "./Card";
import Searchbar from "./Searchbar";
import "../../css/Home.css";
// import Carousel from "./Carousel";
// import "../../css/Carousel.css";

const Home = () => {
  return (
    <>
      <div className="searchComponentContainer">
        <h1 id="titleHeader">What ingredients do you want to use?</h1>
        <Searchbar />
      </div>
    </>
  );
};

export default Home;
