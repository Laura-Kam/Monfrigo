import React from "react";
import "../../css/Searchbar.css";

const Searchbar = () => {
  return (
    <div className="searchContainer">
      <label for="search"></label>
      <input type="search" id="search" placeholder="apples" />
      <button type="submit" id="searchBtn">
        Search
      </button>
    </div>
  );
};

export default Searchbar;
