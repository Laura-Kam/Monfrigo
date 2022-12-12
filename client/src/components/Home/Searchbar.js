import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import Carousel from "./Carousel";
import Card from "./Card";
import "../../css/Searchbar.css";
import axios from "axios";

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [caVisibility, setCaVisisbility] = useState(true);
  const [goatMilk, setGoatMilk] = useState(true)
  // const [getRatingValueForRecipe] = useLazyQuery(GET_RATING_VALUE);

  const options = {
    method: "GET",
    url: "https://tasty.p.rapidapi.com/recipes/list",
    params: { from: "0", size: "40", tags: "under_30_minutes", q: searchInput },
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
        results.length ? setGoatMilk(true) : setGoatMilk(false);
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
  };
  const applePie = () => {
    return goatMilk ? "collapse" : "visible"
  }

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
          <button
            className="mx-3"
            type="submit"
            id="searchBtn"
            htmlFor="searchForm"
            style={{ color: "545454" }}
          >
            Search
          </button>
        </form>
      </div>
      <Carousel visible={caVisibility} />
      <div style={{ visibility: applePie()}}>
        <h1>Sorry, we couldn't find what you were looking for :(</h1>
      </div>
      <div className="cardContainer">
        {recipes.map((recipe) => (
          <Card key={recipe.name} data={recipe} />
        ))}
      </div>
    </>
  );
};

export default Searchbar;
