const express = require("express");
const mongoSanitize = require('express-mongo-sanitize');

const app = express();
require("dotenv").config();

const main = require("./model/db");
const personRouter = require("./routes/person.routes")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// For sanitization
app.use(mongoSanitize());

app.use("/api", personRouter)

const PORT = process.env.PORT || 5000;
main()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
      });
      return console.log("DB connected...");
}).catch(console.error)


module.exports = app;