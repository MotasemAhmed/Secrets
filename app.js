const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db/config");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();
const port = 3000;
db.on("error", console.error.bind(console, "MongoDB error: "));

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const userSchema = {
  email: String,
  password: String,
};
const User = new mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  const newUser = new User({
    email: req.body.username,
    password: req.body.password,
  });
  newUser.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.render("secrets");
    }
  });
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
