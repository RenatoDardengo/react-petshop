import React from "react";
import Head from "../../components/head";
import dogImg from "../../assets/img/dog.jpg"
import "./styles.css"

const Home=()=>{
    return (
        <div>
            <Head/>
            <h1> Estamos na Home</h1>
            <div className="img-class" >
            <img src={dogImg} alt="" />
           </div>
           
        </div>
    )

}

export default Home;