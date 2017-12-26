const express = require("express");
const app = express();

const googlehome = require('google-home-notifier')
const language = 'ja';
googlehome.device('Google-Home', language);

const server = app.listen(8000, function() {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get("/messages", function(req, res, next) {
  const body = req.query.body || 'こんにちは。私はグーグルホームです。';
  googlehome.notify(body, function(res) {
    console.log(res);
  });
  res.json(null);
});
