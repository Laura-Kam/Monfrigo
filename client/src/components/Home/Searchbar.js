import React, { useState } from "react";
import Carousel from "./Carousel";
import Card from "./Card";
import "../../css/Searchbar.css";
import axios from "axios";

const Searchbar = () => {

  const [searchInput, setSearchInput] = useState('');

  const [recipes, setRecipes] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: { from: '0', size: '20', tags: 'under_30_minutes', q: searchInput },
    headers: {
      'X-RapidAPI-Key': '5700097993msh2cd75b0e446c51ap18a767jsn5e6c37c931f1',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };

  const apiSearch = async (event) => {
    event.preventDefault();

    axios.request(options).then(function (response) {
      setRecipes(response.data.results);
    }).catch(function (error) {
      console.error(error);
    });
  }

  return (
    <>
      <div className="searchContainer">
        <form onSubmit={apiSearch}>
          <label htmlFor="search"></label>
          <input type="search" id="search" placeholder="apples" onChange={(e) => setSearchInput(e.target.value)} />
          <button type="submit" id="searchBtn">
            Search
          </button>
        </form>
      </div>
      <Carousel />
      <div className="cardContainer">
        {recipes.map(recipe => {
          return <Card data={recipe}/>
        })}
      </div>
    </>
  );
};

export default Searchbar;
