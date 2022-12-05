import React, { useState } from "react";
import "../../css/Card.css";
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import Button from "@mui/material/Button";
import StarRating from "../Home/StarRating";

const Card = (props) => {
    // const [apiInstruction, setApiInstruction] = useState([]);
    
    const [save, setSave] = useState(() => 
        props.saved === true ? (true) : (false) 
    );

    const handleSave = () => {
        setSave(!save);
      };

      const iconHandler = () => {
        if (save) {
            return <BookmarkAddedIcon fontSize="large"/>;
        } else {
            return <BookmarkAddOutlinedIcon fontSize="large"/>
        }
      }

    return (
        <div className="card">
            <Button style={{ display: "inline", width: "1rem", left: "85%" }} onClick={handleSave}>
                { iconHandler() }
            </Button>
            <h2 className="recipeTitle">{props.data.name}</h2>
            <h3 className="recipeDescription">{props.data.description}</h3>
            <p></p>
            {/* <p className="instructions">{handleApiInstructions}</p> */}
            <img className="recipeImage" alt={props.data.thumbnail_alt_text} src={props.data.thumbnail_url} />
            <p></p>
            <p>Enjoy the taste of what you didn't waste?  Rate this recipe below!</p>
            <p><StarRating /></p>
        </div>
    )
}

export default Card;