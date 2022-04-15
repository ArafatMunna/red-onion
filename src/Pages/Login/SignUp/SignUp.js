import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const SignUp = () => {
    const background = process.env.PUBLIC_URL + "images/bannerbackground.png";
    const logo  = process.env.PUBLIC_URL + "images/logo2.png";
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const [createUserWithEmailAndPassword, user, loading, hookError] =
        useCreateUserWithEmailAndPassword(auth);

    useEffect(() => {
        if (hookError) {
            setError(hookError.message);
        }
    }, [hookError]);

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password, confirmPassword);
            setError("");
        } else {
            setError("Password didn't match");
        }
    };
    return (
        <div style={{ backgroundImage: `url(${background})`, height: "100vh" }}>
            <div className="container w-25 m-auto pt-5">
                <img className="w-100" src={logo} alt="" />
                <h2 className="text-center mt-5 mb-3">Please Sign up</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Your Name"
                            name="name"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicConfirmPassword"
                    >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            required
                        />
                    </Form.Group>
                    <p className="text-danger">{error}</p>
                    <Button className="w-100" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <p className="text-center mt-3">
                    <Link className="text-decoration-none" to="/login">
                        Already have an account?
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
