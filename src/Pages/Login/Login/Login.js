import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {
    const background = process.env.PUBLIC_URL + "images/bannerbackground.png";
    const logo  = process.env.PUBLIC_URL + "images/logo2.png";
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [signInWithEmailAndPassword, user, loading, hookError] =
        useSignInWithEmailAndPassword(auth);

    useEffect(() => {
        if (hookError) {
            setError(hookError.message);
        }
    }, [hookError]);

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
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
