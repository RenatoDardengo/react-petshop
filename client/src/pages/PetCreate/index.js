import React, { useState } from "react";
import Head from "../../components/head";

import "./styles.css";
import Button from "../../components/Button";
import InputText from "../../components/InputText";
import petService from "../../services/petSevices";

const PetCreate = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [type, setType] = useState("");
    const [breed, setBreed] = useState("");
    const [nameOwner, setNameOwner] = useState("");
    const [telephone, setTelephone] = useState("");
    const [adress, setAdress] = useState("");
   
    const handleOnChange = (e) => {
        // setValues(prevValue=>({
        //     ...prevValue,
        //     [e.target.name]:e.target.value,
        // }))

        switch (e.target.name) {
            case 'namePet':
                setName(e.target.value)
                break;
            case 'agePet':
                setAge(e.target.value)
                break;
            case 'typePet':
                setType(e.target.value)
                break;
            case 'breedPet':
                setBreed(e.target.value)
                break;
            case 'nameOwner':
                setNameOwner(e.target.value)
                break;
            case 'telephoneOwner':
                setTelephone(e.target.value)
                break;
            case 'adressOwner':
                setAdress(e.target.value)
                break;
            default:
                break;

        }


    }


    const handleCreatePet = async () => {

        if (!name || !age || !nameOwner || !telephone) {
            alert("Preencha todos os campos");
            return
        }
        try {
            await petService.createPet({
                name: name,
                age: age,
                type: type,
                breed: breed,
                name_owner: nameOwner,
                telephone: telephone,
                adress: adress
            })
            alert("Cadastrado com sucesso!")

        } catch (error) {
            alert("Não foi possível realizar o cadastro.")
            console.log(error)
        }


    }

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
                            <InputText name="namePet" value={name} onChange={handleOnChange} placeholder="nome do pet" />
                        </label>
                        <label>
                            Idade:
                            <InputText name="agePet" value={age} onChange={handleOnChange} placeholder="idade do pet" />
                        </label>
                        <label>
                            Tipo:
                            <InputText name="typePet" value={type} onChange={handleOnChange} placeholder="cachorro, gato etc" />
                        </label>
                        <label>
                            Raça:
                            <InputText name="breedPet" value={breed} onChange={handleOnChange} placeholder=" raça do pet" />
                        </label>
                    </div>
                </div>

                <div className="inf">

                    <h3> Informações do Dono</h3>
                    <div className="information-data">
                        <label>
                            Dono:
                            <InputText name="nameOwner" value={nameOwner} onChange={handleOnChange} placeholder="nome do dono" />
                        </label>
                        <label>
                            Telefone:
                            <InputText name="telephoneOwner" value={telephone} onChange={handleOnChange} placeholder="contato" />
                        </label>
                        <label>
                            Endereço:
                            <InputText name="adressOwner" value={adress} onChange={handleOnChange} placeholder="endereço completo" />
                        </label>

                    </div>
                </div>
                <Button onClick={handleCreatePet} label="Cadastrar" />


            </section>
        </div>
    )

}

export default PetCreate;