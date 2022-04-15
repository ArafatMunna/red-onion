import React from "react";
import { Link, Outlet } from "react-router-dom";
import CustomLink from "../../Shared/CustomLink/CustomLink";

const Foods = () => {
    return (
        <div className="my-5 container">
            <div className="d-flex justify-content-center">
                <CustomLink
                    className="text-decoration-none me-5"
                    to="/breakfast"
                >
                    Breakfast
                </CustomLink>
                <CustomLink
                    className="text-decoration-none me-5"
                    to="lunch"
                >
                    Lunch
                </CustomLink>
                <CustomLink
                    className="text-decoration-none"
                    to="dinner"
                >
                    Dinner
                </CustomLink>
            </div>
            <div className="my-5">
                <Outlet />
            </div>
            <div className="w-100 text-center">
                <Link to="/order">
                    <button className="btn btn-secondary">
                        Checkout Your Food
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Foods;
