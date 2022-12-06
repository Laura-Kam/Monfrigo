import React, { useState } from "react";
import "../../css/Card.css";
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import Button from "@mui/material/Button";
import StarRating from "../Home/StarRating";

const Card = (props) => {

    const apiData = props.data || null;

    const apiIngredients = apiData.sections[0].components || null;

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
            { apiData
                ?
                <>
                    <h2 className="recipeTitle">{apiData.name}</h2>
                    <h3 className="recipeDescription">{apiData.description}</h3>
                    <p></p>
                    <img className="recipeImage" alt={props.data.thumbnail_alt_text} src={props.data.thumbnail_url} />
                    <ul>
                        <p></p>
                        <h2 className ="ingredientsTitle">Ingredients</h2>
                        {apiIngredients.map(ingredient => <li>{ingredient.raw_text}</li>)}
                    </ul>
                    <p className = "ratingText">Enjoy the taste of what you didn't waste?  Rate this recipe below!</p>
                    <p><StarRating /></p>
                </>
                : <h2>Hello</h2>
            }           
        </div>
    )
}

export default Card;