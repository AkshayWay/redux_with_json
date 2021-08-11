const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const path = require("path");
var cors = require("cors");
var app = express();
app.use(cors());
app.use(express.json());
const port = process.env.port || 8080;

const Country_Route = require("./routes/country-routing");

app.use(bodyParser.json());
app.use("/images", express.static("images"));
app.use("/country", Country_Route);
app.use("/static", express.static(path.join(__dirname, "public")));

http.createServer(app).listen(port, function () {
  console.log("Application running on port number " + port);
});
