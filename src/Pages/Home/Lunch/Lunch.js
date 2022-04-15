import React from "react";
import Food from "../Food/Food";

const Lunch = () => {
    const lunch = [
        {
            id: 1,
            name: "Healthy Meal Plan",
            img: process.env.PUBLIC_URL + "images/lunch/lunch1.png",
            description: "How we dream about our future",
            price: 23.99,
        },
        {
            id: 2,
            name: "Fried Chicken Bento",
            img: process.env.PUBLIC_URL + "images/lunch/lunch2.png",
            description: "How we dream about our future",
            price: 9.99,
        },
        {
            id: 3,
            name: "Tarragon-Rubbed-Salmon",
            img: process.env.PUBLIC_URL + "images/lunch/lunch3.png",
            description: "How we dream about our future",
            price: 6.99,
        },
        {
            id: 4,
            name: "Indian Lunch",
            img: process.env.PUBLIC_URL + "images/lunch/lunch4.png",
            description: "How we dream about our future",
            price: 8.99,
        },
        {
            id: 5,
            name: "Beef Steak",
            img: process.env.PUBLIC_URL + "images/lunch/lunch5.png",
            description: "How we dream about our future",
            price: 15.99,
        },
        {
            id: 6,
            name: "Honey-Soy-Glazed Salmon With Peppers",
            img: process.env.PUBLIC_URL + "images/lunch/lunch6.png",
            description: "How we dream about our future",
            price: 7.99,
        },
    ];
    return (
        <div className="container">
            <div className="row">
                {lunch.map((food) => (
                    <Food key={food.id} food={food} />
                ))}
            </div>
        </div>
    );
};

export default Lunch;
