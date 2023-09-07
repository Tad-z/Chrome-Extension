const express = require('express');
const moment = require('moment-timezone');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = weekday[d.getDay()];

// Set the server's timezone to match your local timezone
moment.tz.setDefault('Your/Timezone'); // Replace 'Your/Timezone' with your actual timezone

function getCurrentUTCTime() {
  const currentUTCTime = moment().utc().format('YYYY-MM-DDTHH:mm:ss') + 'Z';
  return currentUTCTime;
}

function validateTimeWithinRange(targetTime, allowedDeviationInSeconds) {
  const currentTime = moment().utc();
  const target = moment(targetTime).utc();
  const timeDifference = Math.abs(currentTime.diff(target, 'seconds'));

  return timeDifference <= allowedDeviationInSeconds;
}

const allowedDeviationInSeconds = 120;

const targetTime = getCurrentUTCTime();
const isValid = validateTimeWithinRange(targetTime, allowedDeviationInSeconds);

let utcTime = null;

if (isValid) {
  utcTime = targetTime;
  console.log(`UTC Time within +/- ${allowedDeviationInSeconds} seconds range: ${utcTime}`);
} else {
  console.log(`UTC Time is not within the valid range.`);
}

app.get('/api', async function (req, res) {
  getCurrentUTCTime()
  validateTimeWithinRange(targetTime, allowedDeviationInSeconds)
  try {
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
});
