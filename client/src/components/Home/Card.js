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
            <img alt={props.data.thumbnail_alt_text} src={props.data.thumbnail_url} />
            {/* <div className="instructions">{console.log(props.data)}</div> */}
            <p><StarRating /></p>
        </div>
    )
}

export default Card;