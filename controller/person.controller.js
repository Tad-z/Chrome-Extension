const Person = require("../model/person.model")

exports.createPerson = async (req, res) => {
    try {
        if (!req.body || !req.body.name) {
            return res.status(400).json({ error: "Invalid request data" });
        }

        const { name } = req.body;
        if (!/^[A-Za-z\s]+$/.test(name)) {
            return res.status(400).json({ error: 'Only strings allowed' });
        }

        const existingPerson = await Person.findOne({ name: name.toLowerCase() });

        if (existingPerson) {
            return res.status(400).json({ error: "Person already exists" });
        }

        const person = new Person({ name: name.toLowerCase() });
        const savedPerson = await person.save();

        return res.status(201).json({
            data: savedPerson,
            message: "Person created successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};


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
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
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
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }

}

exports.updatePerson = async (req, res) => {
    try {
        if (!req.params.user_id) return res.status(400).json({ message: "Bad request" })
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: "Data to update can not be empty!",
            });
        }
        
        const user_id = req.params.user_id;

        const { name } = req.body;
        if (!/^[A-Za-z\s]+$/.test(name)) {
            return res.status(400).json({ error: 'Only strings allowed' });
        }
        await Person.findByIdAndUpdate(user_id, req.body).then((data) => {
            if (!data) {
                res.json({
                    message: `Cannot update Person with id=${user_id}. Maybe Person was not found!`,
                });
            } else res.json({
                message: "Updated successfully."
            });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

exports.deletePerson = async (req, res) => {
    try {
        if (!req.params.user_id) return res.status(400).json({ message: "Bad request" })
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
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}