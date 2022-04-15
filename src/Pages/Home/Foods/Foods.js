import React from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "../../Shared/CustomLink/CustomLink";

const Foods = () => {
    return (
        <div className="mt-5 container">
            <div className="d-flex justify-content-center">
                <CustomLink
                    className="text-decoration-none me-5 text-black"
                    to="/"
                >
                    Breakfast
                </CustomLink>
                <CustomLink
                    className="text-decoration-none me-5 text-black"
                    to="lunch"
                >
                    Lunch
                </CustomLink>
                <CustomLink
                    className="text-decoration-none text-black"
                    to="dinner"
                >
                    Dinner
                </CustomLink>
            </div>
            <div className="mt-5">
                <Outlet />
            </div>
        </div>
    );
};

export default Foods;
