import React from "react";
import Card from "./Card";
import Searchbar from "./Searchbar";
import "../../css/Home.css";
import Carousel from "./Carousel";
import "../../css/Carousel.css";

const Home = () => {
  const dummyText1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  const dummyText2 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <>
      <div className="searchComponentContainer">
        <h1 id="titleHeader">What ingredients do you want to use?</h1>
        <Searchbar />
        <Carousel />
      </div>
      <div className="cardContainer">
        <Card dummyText={dummyText1} />
        <Card dummyText={dummyText2} />
        <Card dummyText={dummyText1} />
        <Card dummyText={dummyText1} />
        <Card dummyText={dummyText2} />
        <Card dummyText={dummyText1} />
        <Card dummyText={dummyText2} />
      </div>
    </>
  );
};

export default Home;
