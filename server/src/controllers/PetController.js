const Pet = require("../models/Pet")
const petController={
index:async (req, res)=>{
    try {
        const pets = await Pet.findAll();
        res.status(200).json({data:pets}) 
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Erro ao listar os pets" })
    }
},
show:async(req, res)=>{
    const {id}=req.params;
    try {
        const pet = await Pet.findByPk(id)
        res.status(200).json({data:pet})
    } catch (error) {
        res.status(400).json({ message: "Erro ao buscar pet" })
    }
},
store:async(req,res)=>{
    const{name,age,type,breed,name_owner,telephone, adress}=req.body
    try {
        await (Pet.create({
            name,
            age,
            type,
            breed,
            name_owner,
            telephone,
            adress
        }))
        res.status(201).json({ message: "Pet cadastrado com sucesso" })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Erro ao cadastrar pet" })
    }
},
update:()=>{},
delete:()=>{}
}

module.exports= petController;