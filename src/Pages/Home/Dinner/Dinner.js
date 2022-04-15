import React from "react";
import useFood from "../../Shared/Hooks/useFood";
import Food from "../Food/Food";

const Dinner = () => {
    const [foods, setFoods] = useFood("dinner.json")
    return (
        <div className="container">
            <div className="row">
                {foods.map((food) => (
                    <Food key={food.id} food={food} />
                ))}
            </div>
        </div>
    );
};

export default Dinner;
