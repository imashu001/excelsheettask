const express = require("express");
var bodyParser = require('body-parser')
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const db = require("./config/mongoose");
const Joi = require("@hapi/joi");
const cors = require("cors");
app.use(cors());
//auth

//Routes
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(bodyParser.json())
const userRoutes = require("./routes/users");
app.use(userRoutes);

//LISTENER
app.listen(8000, () => {
  console.log("Server running on port ::: ", 8000);
});
