const express = require("express");
const DBConnect = require("./db/mongodb");
require("dotenv").config();
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(morgan("dev"));

const StudentAPI = require("./routers/StudentRouter");
const DoctorsAPI = require("./routers/DoctorsRouter");

app.listen(port, () => {
  DBConnect(process.env.DB);
  console.log(`Server is running on http://localhost:${port}`);
});

// Fixed main route
app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

app.use("/api/student", StudentAPI);
app.use("/api/doctors", DoctorsAPI);
