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
                    <h1 class="card-title" style={{ fontFamily: "cormorant CS" }}>Your favourite recipes
                        <span class="material-symbols-outlined" style={{ 
                            margin: "0.4rem",
                            color: "#e75480",
                             }}>
                            favorite
                        </span>
                    </h1>
                    <span
                        className="material-symbols-outlined"
                        style={{
                            color: "#e75480",
                            fontSize: "50px;",
                        }}
                    >
                        soup_kitchen
                    </span>
                    <h2 class="text-muted">enjoy!</h2>
                </div>
            </div>
            <div className="cardContainer">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}