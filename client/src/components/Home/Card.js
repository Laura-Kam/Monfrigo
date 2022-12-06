import React, { useState } from "react";
import "../../css/Card.css";
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import Button from "@mui/material/Button";
import StarRating from "../Home/StarRating";

const Card = (props) => {

    const apiData = props.data;

    const apiIngredients = apiData.sections[0].components;
    console.log(apiData)

    const [save, setSave] = useState(() =>
        props.saved === true ? (true) : (false)
    );

    const handleSave = () => {
        setSave(!save);
    };

    const iconHandler = () => {
        if (save) {
            return <BookmarkAddedIcon fontSize="large" />;
        } else {
            return <BookmarkAddOutlinedIcon fontSize="large" />
        }
    }

    return (
        <div className="card">
            <Button style={{ display: "inline", width: "1rem", left: "85%" }} onClick={handleSave}>
                {iconHandler()}
            </Button>
            {apiData
                ?
                <>
                    <h2 className="recipeTitle">{apiData.name}</h2>
                    <h3 className="recipeDescription">{apiData.description}</h3>
                    <img alt={apiData.thumbnail_alt_text} src={apiData.thumbnail_url} />
                    <ul>
                        <h2>Ingredients</h2>
                        {apiIngredients.map(ingredient => <li>{ingredient.raw_text}</li>)}
                    </ul>
                    <p><StarRating /></p>
                </>
                : <h2>Hello</h2>
            }

        </div>
    )
}

export default Card;