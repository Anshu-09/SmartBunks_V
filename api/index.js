const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");
const bodyParser = require("body-parser");
const serverless = require("serverless-http");

// Middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use("/static", express.static(path.join(__dirname, "../static")));

// File upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "static/uploads"),
  filename: (req, file, cb) => cb(null, "uploaded_holidays.xlsx"),
});
const upload = multer({ storage });

// Routes
app.get("/", (req, res) => res.render("index", { result: null }));

// Handle POST to /calculate
const calculateRoute = require("../api/calculate");
app.post("/calculate", upload.single("holidayFile"), calculateRoute);

module.exports = app;

module.exports = serverless(app);


