import React from 'react';

const Food = ({food}) => {
    const { img, name, description, price } = food;
    return (
        <div className="col-md-4 text-center">
            <img className="w-50" src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <h4>${price}</h4>
        </div>
    );
};

export default Food;