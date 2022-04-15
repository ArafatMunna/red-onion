import React from "react";
import { useParams } from "react-router-dom";

const FoodDetails = () => {
    const { foodId } = useParams();

    return (
        <div style={{height: "100vh"}}>
            <h2>This is Food Details: {foodId}</h2>
        </div>
    );
};

export default FoodDetails;
