import React from "react";
import "../../css/Card.css";
import StarRating from "../Home/StarRating";

const Card = (props) => {
    return (
        <div className="card">
            <h2>Card</h2>
            <p>{props.dummyText}</p>
            <p><StarRating /></p>
        </div>
    )
}

export default Card;