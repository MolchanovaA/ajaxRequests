// START шаблон

var express = require("express");
var fs = require("fs");
var app = express();
var bodyParser = require("body-parser");
const { STATUS_CODES } = require("http");
var port = 9987;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

//конец настройки

app.listen(port, function () {
  console.log(`Example app listening on port http://localhost:${port}/`);
});

app.post("/path", function (req, resp) {
  resp.send("respond from server");
  let str = JSON.stringify({ "Some Content": "ddd" });
  fs.readFile("../models/data.json", "utf-8", (err, data) => {
    console.log(data);

    fs.writeFile("../models/data.json", str, function (err) {
      console.log(err, "from Err");
    });
  });
});
