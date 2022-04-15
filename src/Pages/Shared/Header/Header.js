import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
    const logo = process.env.PUBLIC_URL + "images/logo2.png";
    const [user, loading, error] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    };
    return (
        <Navbar
            sticky="top"
            className="p-3"
            collapseOnSelect
            expand="lg"
            bg="white"
            variant="light"
        >
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img height="30px" src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        {user ? (
                            <button
                                onClick={handleSignOut}
                                className="text-black fw-bold me-3 border-0 bg-white"
                            >
                                Logout
                            </button>
                        ) : (
                            <Nav.Link
                                className="text-black fw-bold me-3"
                                as={Link}
                                to="/login"
                            >
                                Login
                            </Nav.Link>
                        )}
                        <Nav.Link
                            className="bg-danger text-white fw-bold rounded-pill px-3"
                            as={Link}
                            to="/signup"
                        >
                            Sign Up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
