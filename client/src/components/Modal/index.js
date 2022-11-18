import React from "react";
import Button from "../Button";
import "./styles.css"


const Modal = ({ onClose, name, functionDelete }) => {
    const handleClose = (e) => {
        const id = "modal"
        if (e.target.id === id) onClose();

    }
    const deleteItem = () => {
        functionDelete()
        onClose()

    }
    return (

        <div id="modal" className="modal" onClick={handleClose}>
            <div className="modal-content animate-zoom card-4">
                <header className="container teal">
                    <span onClick={onClose}
                        className=" button display-topright">&times;</span>
                    <h2>Atenção!</h2>
                </header>
                <div className="container">
                    <h3> Deseja excluir o pet {name} ?</h3>
                    <div className="div-button">
                        <Button label="Excluir" onClick={deleteItem} />
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Modal;