
const validationPet = (req, res, next) => {
    req.assert("name", "Campo nome do pet não foi preenchido.").notEmpty();
    req.assert("age", "Campo idade não foi preenchido").notEmpty();
    req.assert("type", "Campo tipo do pet não foi preenchido").notEmpty();
    req.assert("breed", "Campo raça do pet não foi preenchido").notEmpty();
    req.assert("name_owner", "Campo dono do pet não foi preenchido").notEmpty();
    req.assert("telephone", "Campo telefone não foi preenchido").notEmpty();
    req.assert("adress", "Campo endereço não foi preenchido").notEmpty();

    var msg = []
    var erros = req.validationErrors();
    if (erros) {
        for (let i = 0; i < erros.length; i++) {
            msg.push(erros[i].msg);
        }
        res.status(400).json({ message: msg })
        return
    }else{
        next();
    }
}

module.exports = validationPet;