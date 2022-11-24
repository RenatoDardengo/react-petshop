const Pet = require("../models/Pet")
const { Op } = require("sequelize");
const petController = {
    index: async (req, res) => {
        try {
            const pets = await Pet.findAll();
            res.status(200).json({ data: pets })
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Erro ao listar os pets" })
        }
    },
    showOne: async (req, res) => {
        const { id } = req.params;

        try {
            const pet = await Pet.findByPk(id)
            res.status(200).json({ data: pet })
        } catch (error) {
            res.status(400).json({ message: "Erro ao buscar pet" })
        }
    },
    show: async (req, res) => {
        const { search } = req.body;
        console.log (req.body)

        try {
            var pet = await Pet.findAll({
                where: {name:{
                        [Op.like]: `%${search}%`
                    }
                }
            })
            res.status(200).json({ data: pet })
        } catch (error) {
            res.status(400).json({ message: "Erro ao buscar pet" })
        }
    },

    store: async (req, res) => {
        const { name, age, type, breed, name_owner, telephone, adress } = req.body
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
    update: async (req, res) => {
        const { name, age, type, breed, name_owner, telephone, adress } = req.body
        const { id } = req.params

        try {
            await Pet.update({
                name,
                age,
                type,
                breed,
                name_owner,
                telephone,
                adress,
                updated_at: new Date()
            },
                {
                    where: { id },
                })
            res.status(200).json({ message: "Pet atualizado com sucesso" })
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Erro ao atualizar o pet" })
        }
    },
    destroy: async (req, res) => {
        const { id } = req.params
        try {
            const pet = await Pet.destroy({
                where: { id }
            })
            res.status(201).json({ message: "Pet deletado com sucesso" })

        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Erro ao deletar pet" })
        }
    }
}

module.exports = petController;