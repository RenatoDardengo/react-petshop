import React from "react";
import Head from "../../components/head";
import dogImg from "../../assets/img/dog.jpg"

const Home=()=>{
    return (
        <div>
            <Head/>
            <h1> Estamos na Home</h1>
           
            <img className="img-class" src={dogImg} alt="" />
           
        </div>
    )

}

export default Home;