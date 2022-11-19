const express = require("express");
const cors = require("cors");
const path = require("path");
const logger = require("morgan");
const rateLimit = require("express-rate-limit");

const indexRouter = require("./routes/index");
const notesRouter = require("./routes/notes");
const octavesRouter = require("./routes/octaves");

const app = express();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 30,
});

app.set("view engine", "ejs");

app.use(limiter);
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/notes", notesRouter);
app.use("/octaves", octavesRouter);

app.use((req, res, next) => {
  res.sendStatus(404).send("Not found.");
});

module.exports = app;
