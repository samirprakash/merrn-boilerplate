const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// body parser setup
app.use(bodyParser.json());

//mongo db setup
const db = require("./config/keys").mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Successfully connected to mongodb atlas cluster"))
  .catch(() => console.log("Error connecting to to mongodb atlas cluster"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
