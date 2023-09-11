const { createPerson, getPersons, getPerson, updatePerson, deletePerson } = require("../controller/person.controller");
const express = require("express")
const router = express.Router();

// create a new person
router.post("/", createPerson);
// get all persons
router.get("/get", getPersons);
// get a specifice person by userid
router.get("/:user_id", getPerson);
// update an existing person details
router.put("/:user_id", updatePerson);
// delete an existing person
router.delete("/:user_id", deletePerson);

module.exports = router;