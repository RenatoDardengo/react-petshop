import React, { useState, useEffect } from "react";
import Head from "../../components/head";
import { useParams, useNavigate } from "react-router-dom";
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
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        const getPet = async () => {
            try {
                const response = await petService.getPetId(id);
                const data = response.data;
                console.log(data)
                if (data) {
                    setName(data.name)
                    setAdress(data.adress)
                    setAge(data.age)
                    setType(data.type)
                    setBreed(data.breed)
                    setNameOwner(data.name_owner)
                    setTelephone(data.telephone)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getPet();
    }, [])


    const handleOnChange = (e) => {
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

    const handleEditPet = async () => {
        if (!name || !age || !type || !breed || !adress || !nameOwner || !telephone) {
            alert("Todos os campos são de preenchimento obrigatório!")
            return
        }
        try {
            const response = await petService.editPet({
                id: id,
                name: name,
                age: age,
                type: type,
                breed: breed,
                name_owner: nameOwner,
                telephone: telephone,
                adress: adress
            })
            const message = response.message;
            alert(message);
            navigate("/pets");

        } catch (error) {
            alert("Não foi possível atualizar o cadastro.")
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
                            <InputText name="namePet" value={name} onChange={handleOnChange} />
                        </label>
                        <label>
                            Idade:
                            <InputText name="agePet" value={age} onChange={handleOnChange} />
                        </label>
                        <label>
                            Tipo:
                            <InputText name="typePet" value={type} onChange={handleOnChange} />
                        </label>
                        <label>
                            Raça:
                            <InputText name="breedPet" value={breed} onChange={handleOnChange} />
                        </label>
                    </div>
                </div>

                <div className="inf">

                    <h3> Informações do Dono</h3>
                    <div className="information-data">
                        <label>
                            Dono:
                            <InputText name="nameOwner" value={nameOwner} onChange={handleOnChange} />
                        </label>
                        <label>
                            Telefone:
                            <InputText name="telephoneOwner" value={telephone} onChange={handleOnChange} />
                        </label>
                        <label>
                            Endereço:
                            <InputText name="adressOwner" value={adress} onChange={handleOnChange} />
                        </label>

                    </div>
                </div>
                <Button label="Alterar" onClick={handleEditPet} />
            </section>
        </div>
    )

}

export default PetEdit;