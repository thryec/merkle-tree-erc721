const express = require("express");
const app = express();
const methodOverride = require("method-override");
const User = require("../models/usersModel");
// const usersSeed = require("../models/usersSeed");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  console.log(req.context);
  try {
    const users = await User.find();
    console.log(users);
    res.send(users);
  } catch (err) {
    res.status(500).send("Unexpected error has occured while retreiving users");
    return;
  }
});

app.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.create(req.body);
    console.log(user);
    res.send(user);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = app;
