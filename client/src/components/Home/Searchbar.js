import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import Carousel from "./Carousel";
import Card from "./Card";
import "../../css/Searchbar.css";
import axios from "axios";
// import dotenv from "dotenv";
            /* THIS LINE BREAKS STUFF. HANDLE WITH CARE */
// import { GET_RATING_VALUE } from "../../utils/queries";
// dotenv.config()

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");

  const [recipes, setRecipes] = useState([]);

  const [caVisibility, setCaVisisbility] = useState(true);

  // const [getRatingValueForRecipe] = useLazyQuery(GET_RATING_VALUE);

  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: { from: "0", size: "20", tags: "under_30_minutes", q: searchInput },
    headers: {
      "X-RapidAPI-Key": "5700097993msh2cd75b0e446c51ap18a767jsn5e6c37c931f1",
      "X-RapidAPI-Host": "tasty.p.rapidapi.com",
    },
  };

  const apiSearch = async (event) => {
    event.preventDefault();
    if (searchInput) {
      try {
        const response = await axios.request(options);
        setCaVisisbility(false);
        if (!response.data.count) {
          setRecipes(null);
        }
        const results = response.data.results;
        for (let recipe of results) {
          // const ratingValue = getRatingValueForRecipe(recipe.id);
          // recipe.ratingValue = ratingValue;
        }
        setRecipes(results);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Please enter a value");
    }

    // searchInput
    //   ?
    //   axios.request(options).then(function (response) {
    //     setCaVisisbility(false);
    //     if (!response.data.count) {
    //       setRecipes(null)
    //     }
    //     setRecipes(response.data.results);
    //   }).catch(function (error) {
    //     console.error(error);
    //   })
    //   : alert("Please enter a value")
  };

  return (
    <>
      <div className="searchContainer">
        <form onSubmit={apiSearch} id="searchForm">
          <label htmlFor="search"></label>
          <input
            type="search"
            id="search"
            placeholder="milk flour eggs"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit" id="searchBtn" htmlFor="searchForm">
            Search
          </button>
        </form>
      </div>
      <Carousel visible={caVisibility} />
      <div className="cardContainer">
        {recipes.map((recipe) => (
          <Card data={recipe} />
        ))}
      </div>
    </>
  );
};

export default Searchbar;
