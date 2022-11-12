const express = require ("express");
const petController = require("../controllers/PetController")
const router = express.Router();
router.get("/", petController.index);
router.post("/", petController.store);
router.get("/:id", petController.show);
router.put("/:id", petController.update);
router.patch("/:id", petController.update);
router.delete("/:id", petController.delete)


module.exports= router;