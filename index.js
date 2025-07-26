const express = require("express");
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files
app.use("/static", express.static(path.join(__dirname, "static")));


// Body parser
app.use(bodyParser.urlencoded({ extended: true }));

// File upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "static/uploads"),
  filename: (req, file, cb) => cb(null, "uploaded_holidays.xlsx"),
});
const upload = multer({ storage });

// Routes
app.get("/", (req, res) => res.render("index", { result: null }));

// Handle POST to /calculate
const calculateRoute = require("./api/calculate");
app.post("/calculate", upload.single("holidayFile"), calculateRoute);

app.listen(port, () => {
  console.log(`SmartBunks server running on port ${port}`);
});
