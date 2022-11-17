import React from "react";
import Button from "../Button";
import "./styles.css"


const Modal = ({onClose, id, functionDelete}) => {
    const handleClose=(e)=>{
        const id ="modal"
        console.log (e.target)
        if (e.target.id===id) onClose();

    }
    const deleteItem=()=>{
        functionDelete()
        onClose()

    }
    return (
        
        <div id= "modal"className="modal" onClick={handleClose}>
            <div className="modal-content animate-zoom card-4">
                <header className="container teal">
                    <span onClick={onClose}
                        className=" button display-topright">&times;</span>
                    <h2>Atenção!</h2>
                </header>
                <div className="container">
                    <h4> Deseja excluir o pet de id {id} ?</h4>
                    <Button label="Confirmar" onClick={deleteItem}/>


                </div>

             </div>
         </div>
    )
}

export default Modal;