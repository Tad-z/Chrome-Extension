const Person = require("../model/person.model")

exports.createPerson = async (req, res) => {
    try {
        if (!req.params.name) {
            return res.status(400).json({
                message: "Name not set"
            })
        }
        const { name } = req.params
        const checkName = await Person.find({ name: name.toLowerCase() }).exec();
        if ((checkName).length > 0) {
            return res.status(400).json({
                message: "Person already exists.",
            });
        }
        if (!req.body) {
            return res.status(400).json({
                message: "Empty fields"
            })
        }
        const person = new Person({
            name: name.toLowerCase(),
            sex: req.body.sex,
            age: req.body.age,
        })
        const savedPerson = await person.save()
        return res.status(200).json({
            savedPerson,
            message: "Person created!!"
        })
    } catch (error) {
        console.log(error);
    }

}

exports.getPersons = async (req, res) => {
    try {
        const persons = await Person.find().exec()
        if (!persons) return res.json([])
        return res.json({
            count: persons.length,
            persons,
            message: "Persons retrieved successfully"
        })
    } catch (error) {
        console.log(error)
    }
}

exports.getPerson = async (req, res) => {
    try {
        if(!req.params.name) return res.status(400).json({ message: "Bad request" })
        const { name } = req.params;
        await Person.find({ name: name.toLowerCase() }).then((data) => {
            if (!data) {
              res.json({
                message: `Person Not found`,
              });
            } else res.json(data);
          });
        // if (!person) {
        //     return res.status(404).json({ message: "Person not found" });
        // }
        // return res.json(person)
    } catch (error) {
        console.log(error)
    }

}

exports.updatePerson = async (req, res) => {
    try{
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({
              message: "Data to update can not be empty!",
            });
          }
        const id = req.params.id;
        await Person.findByIdAndUpdate(id, req.body).then((data) => {
            if (!data) {
              res.json({
                message: `Cannot update Person with id=${id}. Maybe Person was not found!`,
              });
            } else res.json({ 
                data,
                message: "Updated successfully." });
          });
    } catch(error) {
        console.log(error)
    }
}

exports.deletePerson = async (req, res) => {

}