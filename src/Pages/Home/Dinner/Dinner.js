import React from "react";
import Food from "../Food/Food";

const Dinner = () => {
    const dinner = [
        {
            id: 1,
            name: "Salmon with Grapefruit and Lentil Salad",
            img: process.env.PUBLIC_URL + "images/dinner/dinner1.png",
            description: "How we dream about our future",
            price: 9.99,
        },
        {
            id: 2,
            name: "Lemony Salmon Piccata",
            img: process.env.PUBLIC_URL + "images/dinner/dinner2.png",
            description: "How we dream about our future",
            price: 10.99,
        },
        {
            id: 3,
            name: "Pork Tenderloin With Quinoa Pilaf",
            img: process.env.PUBLIC_URL + "images/dinner/dinner3.png",
            description: "How we dream about our future",
            price: 12.99,
        },
        {
            id: 4,
            name: "French fries with cheese",
            img: process.env.PUBLIC_URL + "images/dinner/dinner4.png",
            description: "How we dream about our future",
            price: 8.99,
        },
        {
            id: 5,
            name: "Garlic Butter Backed Salmon",
            img: process.env.PUBLIC_URL + "images/dinner/dinner5.png",
            description: "How we dream about our future",
            price: 6.99,
        },
        {
            id: 6,
            name: "Baked Chicken",
            img: process.env.PUBLIC_URL + "images/dinner/dinner6.png",
            description: "How we dream about our future",
            price: 9.99,
        },
    ];
    return (
        <div className="container">
            <div className="row">
                {dinner.map((food) => (
                    <Food key={food.id} food={food} />
                ))}
            </div>
        </div>
    );
};

export default Dinner;
