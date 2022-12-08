import React, { useState } from "react";
import "../../css/Card.css";
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import Button from "@mui/material/Button";
import StarRating from "../Home/StarRating";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Collapse from "@mui/material/Collapse";
import CardActions from "@mui/material/CardActions";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Card = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const apiData = props.data || null;

  const apiIngredients = apiData.sections[0].components || null;

  const [save, setSave] = useState(() => (props.saved === true ? true : false));

  const handleSave = () => {
    setSave(!save);
  };

  const iconHandler = () => {
    if (save) {
      return <BookmarkAddedIcon fontSize="large" />;
    } else {
      return <BookmarkAddOutlinedIcon fontSize="large" />;
    }
  };

  return (
    <div className="card">
      <Button
        style={{ display: "inline", width: "1rem", left: "85%" }}
        onClick={handleSave}
      >
        {iconHandler()}
      </Button>
      {apiData ? (
        <>
          <h2 className="recipeTitle">{apiData.name}</h2>
          <h3 className="recipeDescription">{apiData.description}</h3>
          <p></p>
          <img
            className="recipeImage"
            alt={props.data.thumbnail_alt_text}
            src={props.data.thumbnail_url}
          />
          <CardActions disableSpacing>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <ul>
              <p></p>
              <h2 className="ingredientsTitle">Ingredients</h2>
              {apiIngredients.map((ingredient) => (
                <li>{ingredient.raw_text}</li>
              ))}
            </ul>
          </Collapse>
          <p className="ratingText">
            Enjoy the taste of what you didn't waste? Rate this recipe below!
          </p>
          <p>
            <StarRating />
          </p>
        </>
      ) : (
        <h2>Hello</h2>
      )}
    </div>
  );
};

export default Card;
