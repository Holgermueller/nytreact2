const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const compression = require("compression");
const PORT = process.env.PORT || 3001;

app.use(morgan("tiny"));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.use("/", routes);

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGOD_URI || "mongodb://localhost:27017/articlesDatabase",
  { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("db connection!");
});

app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
