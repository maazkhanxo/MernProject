const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User.js");
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://maazkhanxo:maaz123@cluster0.rd0pt.mongodb.net/"
);

app.get("/", (req, res) => [
  User.find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.json(err)),
]);

app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  User.findByIdAndUpdate(
    { _id: id },
    {
      name: req.body.name,
      lastName: req.body.lastName,
      email: req.body.email,
      mobile: req.body.mobile,
      project: req.body.project,
    }
  )
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.json(err));
});

app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete({ _id: id })
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.json(err));
});

app.post("/createUser", (req, res) => {
  User.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(PORT, () => {
  console.log("Server is running");
});
