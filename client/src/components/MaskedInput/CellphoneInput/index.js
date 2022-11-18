import React from "react";
import "./styles.css"

const CellphoneInput = ({ onChange, name, value, onKeyUp }) => {

    return (
        <input className="input-text" onChange={onChange} onKeyUp={onKeyUp} name={name} value={value}
            maxLength={14} />
    )
}

export default CellphoneInput;