import React from "react";
import "./styles.css"

const InputText = ({ placeholder, onChange, name, value, defaultValue }) => {

    return (
        <input className="input-text" onChange={onChange} placeholder={placeholder} name={name} value={value}
            defaultValue={defaultValue}/>
    )
}

export default InputText;