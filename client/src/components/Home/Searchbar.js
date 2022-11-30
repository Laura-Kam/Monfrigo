import React from "react";
import "../../css/Searchbar.css"

const Searchbar = () => {
    return (
        <div className="searchContainer">
            <label for="search">Search ingredients</label>
            <input type="search" id="search" placeholder="apples"/>
            <button type="submit">Search</button>
        </div>
    )
}

export default Searchbar;