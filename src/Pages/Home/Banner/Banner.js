import React from "react";
import background from "../../../images/bannerbackground.png";

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${background})`, height: "400px" }}>
            <div className="w-50  mx-auto pt-5">
                <div>
                    <h1 className="text-center">
                        Best food waiting for your belly
                    </h1>
                    <div className="input-group flex-nowrap w-50 mx-auto mt-4">
                        <input
                            type="text"
                            className="form-control rounded-pill"
                            placeholder="Search Your Fovourite Food"
                            aria-label="Search"
                            aria-describedby="addon-wrapping"
                        />
                        <button
                            className="input-group-text bg-danger text-white rounded-pill"
                            id="addon-wrapping"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
