const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = weekday[d.getDay()]

function validateAndGetUTCTime(allowedDeviationInSeconds) {
  const now = new Date();
  const targetTime = now.toISOString();
  const currentTime = new Date(targetTime);
  const timeDifference = Math.abs(now - currentTime) / 1000; // Convert to seconds

  if (timeDifference <= allowedDeviationInSeconds) {
    return targetTime;
  } else {
    return null; // Return null if UTC time is not valid
  }
}




app.get('/api', async function (req, res) {
  try {
    const allowedDeviationInSeconds = 120;

    const utcTime = validateAndGetUTCTime(allowedDeviationInSeconds);
    console.log(utcTime);
    if (utcTime !== null) {
      console.log(`UTC Time within +/- ${allowedDeviationInSeconds} seconds range: ${utcTime}`);
    } else {
      console.error(`UTC Time is not within the valid range.`);
    }

    const slackName = req.query.slack_name; // Extract Slack Name from query parameter
    const chosenTrack = req.query.track;     // Extract Chosen Track from query parameter

    const json = {
      slack_name: slackName,
      current_day: day,
      utc_time: utcTime,
      track: chosenTrack,
      github_file_url: "https://github.com/Tad-z/HNG_/blob/main/stage1.js",
      github_repo_url: "https://github.com/Tad-z/HNG_",
      status_code: 200
    };

    res.status(200).json(json);
  } catch (err) {
    res.send(err.message);
  }
});


app.listen(5000, () => {
  console.log("Server Started");
})