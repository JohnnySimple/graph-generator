import React from "react";

// import components
import Button from "./Button";

const Navbar = () => {
    return (
        <div className="Navbar" style={navbarStyle}>
            <div className="Navbar__left" style={navbarLeftStyle}>
                <h3>Grapher</h3>
            </div>
            {/* <div className="Navbar__right" style={navbarRightStyle}>
                <Button label="Free Trial" />
            </div> */}
        </div>
    );
};

const navbarStyle = {
    width: "100%",
    boxShadow: "0 0 5px #ccc",
    display: "flex",
    alignItems: "center"
}

const navbarLeftStyle = {

}

const navbarRightStyle = {
    marginLeft: "auto",
}

export default Navbar;
