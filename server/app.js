const express = require("express")
const app = express()
const path = require('path');
require("dotenv").config({ path: path.resolve(__dirname, './.env') });
const port = process.env.PORT
const cors = require("cors")
const petRoute = require("./src/routes/petRoute")
const expressValidator = require('express-validator');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(expressValidator())
app.use("/api/v1/pets",petRoute)





app.listen(port, () => {
    console.log(`Servidor rodando no endereço http://localhost:${port}`)
})