const { Router } = require("express");
const { getTemperaments } = require("../controllers/controller");
const { Temperament } = require("../db.js");
const router = Router();

router.get("/", async (req, res) => {
  try {
    await getTemperaments(); // Llama a la función para obtener temperamentos (opcional)
    const allTemperaments = await Temperament.findAll(); // Consulta todos los temperamentos
    res.status(200).json(allTemperaments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
