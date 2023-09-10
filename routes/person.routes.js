const { createPerson, getPersons, getPerson, updatePerson, deletePerson } = require("../controller/person.controller");
const express = require("express")
const router = express.Router();

router.post("/person/create/:name", createPerson);
router.get("/person/getAll", getPersons);
router.get("/person/get/:name", getPerson);
router.put("/person/update/:id", updatePerson);
router.delete("/deletePerson", deletePerson);

module.exports = router;