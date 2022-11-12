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
show:()=>{},
store:()=>{},
update:()=>{},
delete:()=>{}
}

module.exports= petController;