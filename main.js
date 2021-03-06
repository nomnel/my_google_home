const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

const googlehome = require('google-home-notifier')
const language = 'ja';
googlehome.device('Google-Home', language);

const server = app.listen(8000, function() {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get("/messages/new", function(req, res, next) {
  res.render("messages/new", {});
});

app.post("/messages", function(req, res, next) {
  const body = req.body.body;
  if (body) {
    googlehome.notify(body, function(res) {
      console.log(res);
    });
  }
  res.redirect('/messages/new');
});
