import React from "react";


const Button = (props) => {
    return (
        <button className="Button" onClick={props.onClick} style={buttonStyle}>
            <strong>{props.label}</strong>
        </button>
    );
};

const buttonStyle = {
    padding: "5px",
}

export default Button;
