const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const res = require("express/lib/response");

// Load env
dotenv.config({ path: "./config.env" });

const app = express();

//Dev logging
if (process.env.NODE_ENV === "DEVELOPMENT") app.use(morgan("dev"));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Profile routes
app.use("/api/v1/profile", require("./routes/profile"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// process is a node.js object
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
