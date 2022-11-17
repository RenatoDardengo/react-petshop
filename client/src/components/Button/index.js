import React from "react";
import "./styles.css"

const Button = ({ label, onClick, color}) => {

    return (
        <button className={color ? "flat":"btn"} onClick={onClick}>{label}</button>
    )
}

export default Button;