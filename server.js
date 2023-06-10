const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDb = require("./config/db");
const path = require("path");

// dotenv config
require("dotenv").config();

// mongodb connection
connectDb();

// rest object
const app = express();
app.use(cors());

// middlwares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));

// static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// port
const port = process.env.PORT || 8080;
// listen port
app.listen(port, () => {
  console.log(
    `server is running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT} `
      .bgCyan.white
  );
});
