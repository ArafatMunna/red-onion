import React from "react";

const Banner = () => {
    const background = process.env.PUBLIC_URL + "images/bannerbackground.png";
    return (
        <div style={{ width: "100%", height: "50vh", overflow: "hidden" }}>
            <div
                style={{
                    backgroundImage: `url(${background})`,
                    height: "100%",
                    width: "100%",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    transform: "scale(1.1)",
                }}
            >
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
        </div>
    );
};

export default Banner;
