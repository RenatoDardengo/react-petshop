import React, { useState, useEffect } from "react";
import Head from "../../components/head";
import { useParams } from "react-router-dom";
import "./styles.css";
import Button from "../../components/Button";
import InputText from "../../components/InputText";
import petService from "../../services/petSevices";

const PetEdit = () => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [type, setType] = useState("");
    const [breed, setBreed] = useState("");
    const [nameOwner, setNameOwner] = useState("");
    const [telephone, setTelephone] = useState("");
    const [adress, setAdress] = useState("");
    const [pet, setPet] = useState()
    const { id } = useParams();

    useEffect(() => {
        const getPet = async () => {
            try {
                const response = await petService.getPetId(id);
                const data = response.data;
                console.log(data)
                setPet(data)


            } catch (error) {
                console.log(error)

            }
        }
        getPet();
    }, [])

    useEffect(() => {
        if (pet) {
            setName(pet.name);
            setAdress(pet.adress);
            setAge(pet.age);
            setType(pet.type);
            setBreed(pet.breed);
            setNameOwner(pet.name_owner);
            setTelephone(pet.telephone);
        }


    }, [pet])
  
    return (
        <div>
            <Head />
            <section className="information">
                <h1> Cadastrar novo Pet</h1>

                <div className="inf">

                    <h3> Informações do Pet</h3>
                    <div className="information-data">

                        <label>
                            Nome:
                            <InputText value={name} />
                        </label>
                        <label>
                            Idade:
                            <InputText value={age} />
                        </label>
                        <label>
                            Tipo:
                            <InputText value={type} />
                        </label>
                        <label>
                            Raça:
                            <InputText value={breed} />
                        </label>
                    </div>
                </div>

                <div className="inf">

                    <h3> Informações do Dono</h3>
                    <div className="information-data">
                        <label>
                            Dono:
                            <InputText value={nameOwner} />
                        </label>
                        <label>
                            Telefone:
                            <InputText value={telephone} />
                        </label>
                        <label>
                            Endereço:
                            <InputText value={adress} />
                        </label>

                    </div>
                </div>
                <Button label="Alterar" />


            </section>
        </div>
    )

}

export default PetEdit;