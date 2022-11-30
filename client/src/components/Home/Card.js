import React from "react";

const Card = (props) => {
    console.log(props)
    return (
        <div>
            <h2>Card</h2>
            <p>{props.dummyText}</p>
        </div>
    )
}

export default Card;