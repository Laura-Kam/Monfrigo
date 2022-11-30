import React from "react";
import "../../css/Card.css"

const Card = (props) => {
    console.log(props)
    return (
        <div className="card">
            <h2>Card</h2>
            <p>{props.dummyText}</p>
        </div>
    )
}

export default Card;