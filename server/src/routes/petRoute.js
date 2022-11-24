const express = require ("express");
const validation = require ("../middlewares/validationPet")
const petController = require("../controllers/PetController")
const router = express.Router();
router.get("/", petController.index);
router.post("/",validation, petController.store);
router.post("/search",petController.show);
router.get("/:id", petController.showOne);
router.put("/:id",validation, petController.update);
router.patch("/:id", petController.update);
router.delete("/:id", petController.destroy)


module.exports= router;