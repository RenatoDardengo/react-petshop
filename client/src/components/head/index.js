import React from "react";
import { Link } from "react-router-dom";
import ("./styles.css")
const Head=()=>{
    return(

    <header className="class-head">
        <div></div>
        <div>
            <nav className="nav">
                    <Link className="class-option" to="/">Home</Link>
                    <Link className="class-option" to="/pets">Cadastro</Link>
                

            </nav>
        </div>
    </header>
    )

}

export default Head;