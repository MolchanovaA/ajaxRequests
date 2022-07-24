// START template

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

//END template

app.listen(port, function () {
  console.log(`Example app listening on port http://localhost:${port}/`);
});

function toCreateId(id) {
  let toArrayID = `${id}`.split("");
  let idLength = toArrayID.length;
  let maxIdLength = 4;
  let addZero = maxIdLength - idLength;

  for (var i = 0; i < addZero; i++) {
    toArrayID.unshift("0");
  }

  return toArrayID.join("");
}

app.post("/path", function (req, resp) {
  resp.send("respond from server");
  let body = req.body;
  let parsedBody = JSON.parse(body);

  fs.readFile("../models/data.json", "utf-8", (err, data) => {
    let parsedData = JSON.parse(data);
    parsedBody.id = toCreateId(parsedData.length);
    parsedData.push(parsedBody);
    let stringifyedData = JSON.stringify(parsedData);
    fs.writeFile("../models/data.json", stringifyedData, function (err) {
      console.log(err, "from Err");
    });
  });
});
