import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import background from "../../../images/bannerbackground.png";
import logo from "../../../images/logo2.png";

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const [signInWithEmailAndPassword, user, loading, hookError] =
        useSignInWithEmailAndPassword(auth);

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

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password);
        setError("");
    };

    return (
        <div style={{ backgroundImage: `url(${background})`, height: "100vh" }}>
            <div className="container w-25 m-auto pt-5">
                <img className="w-100" src={logo} alt="" />
                <h2 className="text-center mt-5 mb-3">Please Login</h2>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                        />
                    </Form.Group>
                    <p className="text-danger">{error}</p>
                    <Button className="w-100" variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
                <p className="text-center mt-3">
                    <Link className="text-decoration-none" to="/signup">
                        New to Red Onion? Signup
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;