const express = require("express");
const Router = express.Router();
const jsonDB = require("./data.json");
const fs = require("fs");
const { json } = require("body-parser");
const multer = require("multer");

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype == "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Message: Wrong file type"), false);
  }
};

const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload_flag = multer({
  storage: imageStorage,
  fileFilter: fileFilter,
});
Router.get("/countries", (req, res) => {
  fs.readFile("../server-api/routes/data.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("Error:" + err);
    } else {
      res.send(jsonString);
    }
  });
});

Router.get("/countries/:id", (req, res) => {
  var data = fs.readFileSync("../server-api/routes/data.json"),
    myObj;

  try {
    myObj = JSON.parse(data);
    const foundUser = Object.values(myObj.countries).find(
      (user) => user.id === parseInt([req.params.id])
    );
    res.send(foundUser);
  } catch (err) {
    console.log("There has been an error parsing your JSON.");
    console.log(err);
  }
});

Router.post("/countries", upload_flag.single("flag_img"), (req, res) => {
  var flgImg = "";
  if (req.file !== undefined) {
    flgImg = req.file.filename;
  }
  fs.readFile(
    "../server-api/routes/data.json",
    "utf8",
    function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        obj = JSON.parse(data);
        obj.countries.push({
          id: parseInt(req.body.id),
          name: req.body.name.replace(/^"(.*)"$/, "$1"),
          continent: req.body.continent.toString().replace(/^"(.*)"$/, "$1"),
          flag: req.file.filename,
          rank: parseInt(req.body.rank),
        }); //add some data
        // json = JSON.stringify(obj); //convert it back to json
        fs.writeFile(
          "../server-api/routes/data.json",
          JSON.stringify(obj, null, 2),
          "utf8",
          function (err) {
            if (err) throw err;
            res.send("Data inserted successfully");
          }
        );
      }
    }
  );
});

module.exports = Router;
