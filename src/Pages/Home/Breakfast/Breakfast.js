import React from "react";
import breakfast1 from "../../../images/breakfast/breakfast1.png";
import breakfast2 from "../../../images/breakfast/breakfast2.png";
import breakfast3 from "../../../images/breakfast/breakfast3.png";
import breakfast4 from "../../../images/breakfast/breakfast4.png";
import breakfast5 from "../../../images/breakfast/breakfast5.png";
import breakfast6 from "../../../images/breakfast/breakfast6.png";
import Food from "../Food/Food";

const Breakfast = () => {
    const breakfast = [
        {
            id: 1,
            name: "Begel and cream cheese",
            img: breakfast1,
            description: "How we dream about our future",
            price: 6.99,
        },
        {
            id: 2,
            name: "Breakfast sandwich",
            img: breakfast2,
            description: "How we dream about our future",
            price: 9.99,
        },
        {
            id: 3,
            name: "Baked Chicken",
            img: breakfast3,
            description: "How we dream about our future",
            price: 10.99,
        },
        {
            id: 4,
            name: "Eggs Benedict",
            img: breakfast4,
            description: "How we dream about our future",
            price: 8.99,
        },
        {
            id: 5,
            name: "Toast Croissant Fried egg",
            img: breakfast5,
            description: "How we dream about our future",
            price: 19.99,
        },
        {
            id: 6,
            name: "Full Breakfast Fried Egg Toast Brunch",
            img: breakfast6,
            description: "How we dream about our future",
            price: 3.99,
        },
    ];
    return (
        <div className="container">
            <div className="row">
                {breakfast.map((food) => (
                    <Food key={breakfast.id} food={food} />
                ))}
            </div>
        </div>
    );
};

export default Breakfast;
