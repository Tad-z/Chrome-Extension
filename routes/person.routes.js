const { createPerson, getPersons, getPerson, updatePerson, deletePerson } = require("../controller/person.controller");
const express = require("express")
const router = express.Router();

router.post("/", createPerson);
router.get("/get", getPersons);
router.get("/:user_id", getPerson);
router.put("/:user_id", updatePerson);
router.delete("/:user_id", deletePerson);

module.exports = router;