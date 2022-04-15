import React from "react";
import lunch1 from "../../../images/lunch/lunch1.png";
import lunch2 from "../../../images/lunch/lunch2.png";
import lunch3 from "../../../images/lunch/lunch3.png";
import lunch4 from "../../../images/lunch/lunch4.png";
import lunch5 from "../../../images/lunch/lunch5.png";
import lunch6 from "../../../images/lunch/lunch6.png";
import Food from "../Food/Food";

const Lunch = () => {
    const lunch = [
        {
            id: 1,
            name: "Healthy Meal Plan",
            img: lunch1,
            description: "How we dream about our future",
            price: 23.99,
        },
        {
            id: 2,
            name: "Fried Chicken Bento",
            img: lunch2,
            description: "How we dream about our future",
            price: 9.99,
        },
        {
            id: 3,
            name: "Tarragon-Rubbed-Salmon",
            img: lunch3,
            description: "How we dream about our future",
            price: 6.99,
        },
        {
            id: 4,
            name: "Indian Lunch",
            img: lunch4,
            description: "How we dream about our future",
            price: 8.99,
        },
        {
            id: 5,
            name: "Beef Steak",
            img: lunch5,
            description: "How we dream about our future",
            price: 15.99,
        },
        {
            id: 6,
            name: "Honey-Soy-Glazed Salmon With Peppers",
            img: lunch6,
            description: "How we dream about our future",
            price: 7.99,
        },
    ];
    return (
        <div className="container">
            <div className="row">
                {lunch.map((food) => (
                    <Food key={lunch.id} food={food} />
                ))}
            </div>
        </div>
    );
};

export default Lunch;
