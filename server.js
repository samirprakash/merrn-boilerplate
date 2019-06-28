const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

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

// Production deployment setup
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// port setup
const port = process.env.PORT || 5000;

// start server
app.listen(port, () => console.log(`Server started on port ${port}`));
