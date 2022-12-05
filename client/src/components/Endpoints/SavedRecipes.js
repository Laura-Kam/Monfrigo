import React from "react";
import Card from "../Home/Card";

export default function SavedRecipes() {
    return (
        <div>
            <div
                class="card text-center"
                style={{
                    border: "5px",
                    backgroundColor: "white",
                    borderColor: "#FFE7E9",
                    fontFamily: "cormorant CS",
                }}
            >
                <div class="card-body">
                    <h1 class="card-title" style={{ fontFamily: "cormorant CS" }}>Enjoy your favourite recipes</h1>
                        <span class="material-symbols-outlined" style={{ 
                            display: "block",
                            margin: "0.4rem",
                            color: "#e75480",
                             }}>
                            favorite
                        </span>
                    {/* <span
                        className="material-symbols-outlined"
                        style={{
                            color: "#e75480",
                            fontSize: "50px;",
                        }}
                    >
                        soup_kitchen
                    </span> */}
                </div>
            </div>
            <div className="cardContainer">
                <Card saved={true}/>
                <Card saved={true}/>
                <Card saved={true}/>
                <Card saved={true}/>
            </div>
        </div>
    )
}