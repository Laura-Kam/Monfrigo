import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { FAV_RECIPE } from "../../utils/mutations";
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

// chocolateLatte = ingredients         strawberryIcecream = instructions

const Card = (props) => {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const apiData = (props.data) || null;
    const silverNeedleTea = () => {
        return apiData.recipes ? true : false
    }
    const [favRecipe] = useMutation(FAV_RECIPE)
    const chocolateLatte = [];
    const strawberryIcecream = [];
    // console.log(apiData)
    if (props.saved) {
        apiData.ingredients.map((ingredient) => {
            chocolateLatte.push(ingredient);
            return chocolateLatte
        });
        apiData.cookingInstruction.map((instruction) => {
            strawberryIcecream.push(instruction);
            return strawberryIcecream;
        });
    } else {
        if (silverNeedleTea()) {
            apiData.recipes[0].sections[0].components.map((ingredient) => {
                chocolateLatte.push(ingredient.raw_text);
                return chocolateLatte;
            });
            apiData.recipes[0].instructions.map((instruction) => {
                strawberryIcecream.push(instruction.display_text);
                return strawberryIcecream;
            });
        } else {
            apiData.sections[0].components.map((ingredient) => {
                chocolateLatte.push(ingredient.raw_text);
                return chocolateLatte;
            });
            apiData.instructions.map((instruction) => {
                strawberryIcecream.push(instruction.display_text);
                return strawberryIcecream;
            });
        }
    }
    const [save, setSave] = useState(() =>
        props.saved === true ? (true) : (false)
    );
    const handleSaveButton = () => {
        setSave(!save);
    };
    const HandleSaveRecipe = async () => {
        const response = await favRecipe({
            variables: {
                recipe: {
                    name: apiData.name,
                    cookingInstruction: strawberryIcecream,
                    ingredients: chocolateLatte,
                    imageLink: props.data.thumbnail_url,
                    description: apiData.description
                }
            }
        });
    }
    const iconHandler = () => {
        if (save) {
            return <BookmarkAddedIcon fontSize="large" />;
        } else {
            return <BookmarkAddOutlinedIcon fontSize="large" />;
        }
    };
    return (
        <div className="card">
            <Button style={{ display: "inline", width: "1rem", left: "85%" }} onClick={() => {
                handleSaveButton()
                if (!save) {
                    HandleSaveRecipe()
                }
            }}>
                {iconHandler()}
            </Button>
            {apiData
                ?
                <>
                    <h2 className="recipeTitle">{apiData.name}</h2>
                    <h3 className="recipeDescription">{apiData.description}</h3>
                    <p></p>
                    <img className="recipeImage" alt={props.data.thumbnail_alt_text || apiData.name} src={props.data.thumbnail_url || apiData.imageLink} />

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
                            {chocolateLatte.map(ingredient => <li>{ingredient}</li>)}
                        </ul>
                        <ul>
                            <h2 className="instructionsTitle">Instructions</h2>
                            {strawberryIcecream.map(instruction => <li>{instruction}</li>)}
                        </ul>
                    </Collapse>
                    <p className="ratingText">Enjoy the taste of what you didn't waste?  Rate this recipe below!</p>
                    <p><StarRating /></p>
                </>
                : <h2>Hello</h2>
            }
        </div>
    )
}
export default Card;
