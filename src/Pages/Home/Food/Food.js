import React from "react";
import { useNavigate } from "react-router-dom";
import "./Food.css";

const Food = ({ food }) => {
    const { img, name, description, price, id } = food;
    const navigate = useNavigate();

    const foodDetails = () => {
        navigate(`/food/${id}`);
    };
    return (
        <div onClick={foodDetails} className="col-md-4 text-center food-card">
            <img className="w-50" src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <h4>${price}</h4>
        </div>
    );
};

export default Food;
