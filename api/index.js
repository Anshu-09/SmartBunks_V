const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");
const bodyParser = require("body-parser");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use("/static", express.static(path.join(__dirname, "../static")));

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));


const port = 3000;

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

app.listen(port, () => {
  console.log(`SmartBunks server running on port ${port}`);
});
module.exports = app;

const serverless = require("serverless-http");
module.exports = serverless(app);


