import React from "react";
import { GET_ME } from "../../utils/queries";
import Card from "../Home/Card";
import { useQuery } from "@apollo/client";

export default function SavedRecipes() {
    const { loading, error, data } = useQuery(GET_ME);
    const userData = data?.user.recipes || [];

    return (
        <div>
            <div
                className="card text-center"
                style={{
                    border: "5px",
                    backgroundColor: "white",
                    borderColor: "#FFE7E9",
                    fontFamily: "cormorant CS",
                }}
            >
                <div className="card-body">
                    <h1 className="card-title" style={{ fontFamily: "cormorant CS" }}>Enjoy your favourite recipes</h1>
                    <span className="material-symbols-outlined" style={{
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
                {userData.map((recipe) => (<Card data={recipe} saved={true} />))}
            </div>
        </div>
    )
}