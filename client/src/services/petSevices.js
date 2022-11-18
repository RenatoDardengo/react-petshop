import api from "./Apis/main";

const petService={
    
    getPet:async()=>{
        const response = await api.get("/api/v1/pets");
        return response.data;
        
    },
    getPetId:async(id)=>{
        const response = await api.get(`/api/v1/pets/${id} `);
        return response.data;

    },
    createPet:async(data)=>{
        const{name, age, type, breed, name_owner,telephone,adress}=data
        const response = await api.post("/api/v1/pets",
        {
            name,
            age,
            type,
            breed,
            name_owner,
            telephone,
            adress

        })
        return response.data
    },
    editPet: async (data) => {
        const { name, age, type, breed, name_owner, telephone, adress, id} = data
        const response = await api.put(`/api/v1/pets/${id} `,
            {
                name,
                age,
                type,
                breed,
                name_owner,
                telephone,
                adress

            })
        return response.data
    },
    deletePet:async (id)=>{
        const response = await api.delete(`/api/v1/pets/${id} `);
        console.log (response)
        return response.data

    }
}

export default petService;