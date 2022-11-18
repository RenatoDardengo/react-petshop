import React from "react";
import Head from "../../components/head";
import dogImg from "../../assets/img/dog.jpg"
import "./styles.css"

const Home = () => {
    return (
        <div>
            <Head />
            <h1> Bem-Vindo ao Pet Shop</h1>
            <div className="img-class" >
                <img src={dogImg} alt="" />
            </div>
        </div>
    )
}

export default Home;