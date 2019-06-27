const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const samples = require("./routes/api/samples");
const app = express();

// body parser setup
app.use(bodyParser.json());

//mongo db setup
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Successfully connected to mongodb atlas cluster"))
  .catch(err => console.log(err));

// sample routes setup
app.use("/api/samples", samples);

// port setup
const port = process.env.PORT || 5000;

// start server
app.listen(port, () => console.log(`Server started on port ${port}`));
