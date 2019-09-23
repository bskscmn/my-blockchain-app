import React, {Component} from "react";
import {Navbar} from "react-bootstrap";
import logo from "../images/logo.png";

class Header extends Component {

    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top App-logo "
                    />
                    {' My Blockchain App'}
                </Navbar.Brand>
            </Navbar>
        );
    }
}

export default Header;