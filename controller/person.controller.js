const Person = require("../model/person.model")
const validator = require('validator');

exports.createPerson = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({
                message: "Empty fields"
            })
        }
        const name = req.body.name;
        if (!validator.isString(name)) {
            return res.status(400).json({ error: 'Name must be a string' });
        }
        const person = new Person({
            name
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
        if (!req.params.user_id) return res.status(400).json({ message: "Bad request" })
        const { user_id } = req.params;
        await Person.find({ _id: user_id }).then((data) => {
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
    try {
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: "Data to update can not be empty!",
            });
        }
        const user_id = req.params.user_id;
        await Person.findByIdAndUpdate(user_id, req.body).then((data) => {
            if (!data) {
                res.json({
                    message: `Cannot update Person with id=${user_id}. Maybe Person was not found!`,
                });
            } else res.json({
                data,
                message: "Updated successfully."
            });
        });
    } catch (error) {
        console.log(error)
    }
}

exports.deletePerson = async (req, res) => {
    try {
        const user_id = req.params.user_id;
        await Person.findByIdAndRemove(user_id).then((data) => {
            if (!data) {
                res.json({
                    message: `Cannot delete Person with id=${user_id}. Maybe Person was not found!`,
                });
            } else res.status(204).json({
                message: "Deleted successfully."
            });
        })
    } catch (error) {
        console.log(error)
    }
}