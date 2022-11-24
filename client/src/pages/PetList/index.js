import React, { useEffect, useState } from "react";
import Head from "../../components/head";
import "./styles.css";
import { Link } from "react-router-dom";
import petService from "../../services/petSevices";
import Button from "../../components/Button";
import InputText from "../../components/InputText";
import editImg from "../../assets/img/edit.png";
import deleteImg from "../../assets/img/delete.png";
import Modal from "../../components/Modal";
import addImg from "../../assets/img/add.png";


const PetList = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [idDelete, setIdDelete] = useState(0)
    const [name, setName] = useState("")
    const [pets, setPets] = useState([])
    const [search, setSearch]=useState('');

    const handleDelete = async (id) => {
        try {
            const response = await petService.deletePet(id)
            const message = response.message
            alert(message)
            getAllPets()
        } catch (error) {
            console.log(error)
        }
    }

    const getAllPets = async () => {
        try {
            const response = await petService.getPet();
            const data = response.data;
            setPets(data)
        } catch (error) {
            console.log(error)
        }
    }
    const searchPets=async()=>{
        
        try{
            const response = await petService.getSearchPet(search);
            const data = response.data;
            setPets(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getAllPets()
    }, [])


    return (
        <div>
            <Head />
            {isVisible ? <Modal onClose={() => setIsVisible(false)} name={name} functionDelete={() => handleDelete(idDelete)} /> : null}

            <section className="content">
                <h2> Cadastro de Pets</h2>
                <div className="comands-input">
                    <div className="cmd-search">
                        <InputText onChange={(e)=> setSearch(e.target.value)} />
                        <Button label="Pesquisar" onClick={searchPets}/>
                    </div>
                    <div>
                        <Link to="/pets/create"><img src={addImg} alt="" /></Link>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Tipo</th>
                            <th>Dono</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pets.length ? (
                            pets.map((pet, idx) =>
                                <tr key={idx}>
                                    <td> {pet.id}</td>
                                    <td>{pet.name}</td>
                                    <td>{pet.age}</td>
                                    <td>{pet.type}</td>
                                    <td>{pet.name_owner}</td>
                                    <td>
                                        <Link to={`/pets/edit/${pet.id}`}><img src={editImg} alt="" /></Link>
                                        <Button color="flat" onClick={() => { setIsVisible(true); setIdDelete(pet.id); setName(pet.name) }} label={<img src={deleteImg} alt="" />}></Button>
                                    </td>
                                </tr>
                            )) : (
                            <tr>
                                <td> Lista vazia</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        </div>
    )

}

export default PetList;