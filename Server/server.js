// START шаблон

//СТАРТ Настройки
var express = require("express");
var fs = require("fs");
var app = express();
var bodyParser = require("body-parser");
var port = 4556;

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
  let str = JSON.stringify({ "Some Content": "ddd" });
  fs.writeFile("./models/data.json", str, function (err) {
    console.log(err, "from Err");
  });
});
