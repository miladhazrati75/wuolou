const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, "./dist");
const apiRouter = express.Router();
const fileUpload = require("express-fileupload");
const api = require("./server/webApi")(apiRouter);
const models = require("./models");
const bodyParser = require("body-parser");
app.use(express.static(DIST_DIR));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/webApi-v1", api);
app.use(fileUpload());

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./dist/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
app.listen(port, function () {
  console.log("App listening on port: " + port);
});
