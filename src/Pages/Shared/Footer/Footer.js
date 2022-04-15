import React from "react";
import logo from "../../../images/logo.png";

const Footer = () => {
    return (
        <div className="bg-black">
            <div className="container text-white">
                <div className="row">
                    <div className="col-md-6 p-5">
                        <img className="w-25" src={logo} alt="" />
                    </div>
                    <div className="col-md-3 p-5">
                        <p>About Online food</p>
                        <p>Read Our blog</p>
                        <p>Sign up to deliver</p>
                        <p>Add your restaurant</p>
                    </div>
                    <div className="col-md-3 p-5">
                        <p>Get help</p>
                        <p>Read FAQs</p>
                        <p>View all cities</p>
                        <p>Restaurants near me</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p>
                            <small>
                                Copyright &copy; {new Date().getFullYear()}{" "}
                                online food
                            </small>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-evenly">
                            <p>Privacy Policy.</p>
                            <p>Terms of Use</p>
                            <p>Pricing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
