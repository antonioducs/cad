import React, { Component, Fragment } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import img from "../../assets/img/CAD LOGO 2.png";
import insta from "../../assets/img/insta.png";

import "./styles.css";


class HeaderMain extends Component {

    render() {
        return (
            <Fragment>
                <div id="nav-bar">
                    <Navbar className="header-main" expand="lg" bg="dark" variant="dark" fixed="top"  >
                        <Navbar.Brand onClick={() => {
                            window.scrollTo(0, 0);
                        }}>
                            <div className="img-plogin">
                                <img src={img} alt="logo" />
                            </div></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link onClick={() => {
                                    window.scrollTo(0, 0);
                                }}>Home</Nav.Link>
                                <Nav.Link onClick={() => {
                                    if(window.innerHeight >= 612)
                                        window.scrollTo(0, 800);
                                    else
                                    window.scrollTo(0, 400);
                                }}>Palestrantes</Nav.Link>
                                <Nav.Link onClick={() => {
                                    if(window.innerHeight >= 612)
                                        window.scrollTo(0, 1600);
                                    else
                                        window.scrollTo(0, 1300);
                                }}>Nosso Time</Nav.Link>
                                <Nav.Link onClick={() => {
                                    if(window.innerHeight >= 612)
                                        window.scrollTo(0, 2800);
                                    else
                                        window.scrollTo(0, 1800);
                                }}>Inscrições</Nav.Link>
                                <div className="img-insta">
                                    <a href="https://www.instagram.com/caduemspba/" rel="noopener noreferrer" target="_blank"><img src={insta} alt="..." /></a>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </Fragment>
        );
    }
}

export default HeaderMain;