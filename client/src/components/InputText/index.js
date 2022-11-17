import React from "react";
import "./styles.css"

const InputText = ({ placeholder, onChange, name}) => {

    return (
        <input className="input-text" onChange={onChange} placeholder={placeholder} name={name}/>
    )
}

export default InputText;