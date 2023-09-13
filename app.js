const express = require("express");
const mongoSanitize = require('express-mongo-sanitize');
const cron = require('node-cron');
const axios = require('axios')
const morgan = require('morgan')

const app = express();
require("dotenv").config();

const main = require("./model/db");
const personRouter = require("./routes/person.routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// For sanitization
app.use(mongoSanitize());

app.use(morgan("dev"))

app.use("/api", personRouter)

const PORT = process.env.PORT || 5000;
main()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
    return console.log("DB connected...");
  })
  .catch(console.error);

// Schedule the cron job to make a request every 10 minutes to keep the API alive
// cron.schedule('*/10 * * * *', async () => {
//   try {
//     // Make a GET request to a specific endpoint (e.g., /api/keep-alive)
//     const response = await axios.get(`https://stage1-gyv4.onrender.com/api/650187a7638e84d63e79de89`)
//     console.log('Response:', response.data);
//   } catch (error) {
//     console.error('Error:', error.message);
//   } console.error('Keep-alive request error:', error);
// });

