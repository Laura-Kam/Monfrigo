import React from "react";
import Card from "./Card";
import Searchbar from "./Searchbar";

const Home = () => {
    return (
        <>
            <h1>What ingredients do you want to use?</h1>
            <Searchbar />
            <Card />
        </>
    )
}

export default Home;