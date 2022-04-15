import React from "react";
import dinner1 from "../../../images/dinner/dinner1.png";
import dinner2 from "../../../images/dinner/dinner2.png";
import dinner3 from "../../../images/dinner/dinner3.png";
import dinner4 from "../../../images/dinner/dinner4.png";
import dinner5 from "../../../images/dinner/dinner5.png";
import dinner6 from "../../../images/dinner/dinner6.png";
import Food from "../Food/Food";

const Dinner = () => {
    const dinner = [
        {
            id: 1,
            name: "Salmon with Grapefruit and Lentil Salad",
            img: dinner1,
            description: "How we dream about our future",
            price: 9.99,
        },
        {
            id: 2,
            name: "Lemony Salmon Piccata",
            img: dinner2,
            description: "How we dream about our future",
            price: 10.99,
        },
        {
            id: 3,
            name: "Pork Tenderloin With Quinoa Pilaf",
            img: dinner3,
            description: "How we dream about our future",
            price: 12.99,
        },
        {
            id: 4,
            name: "French fries with cheese",
            img: dinner4,
            description: "How we dream about our future",
            price: 8.99,
        },
        {
            id: 5,
            name: "Garlic Butter Backed Salmon",
            img: dinner5,
            description: "How we dream about our future",
            price: 6.99,
        },
        {
            id: 6,
            name: "Baked Chicken",
            img: dinner6,
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
