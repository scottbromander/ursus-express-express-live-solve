const express = require("express");
const app = express();

// This is your array of trains
const trains = [
  { name: "Thomas", color: "Blue" },
  { name: "Gordon", color: "Blue" },
  { name: "Henry", color: "Green" },
  { name: "James", color: "Red" },
];

app.use(express.static("server/public"));

app.get("/train", (req, res) => {
  res.send(trains);
});

app.get("/first-train", (req, res) => {
  res.send(trains[0]);
});

app.get("/last-train", (req, res) => {
  res.send(trains[trains.length - 1]);
});

app.get("/count", (req, res) => {
  res.send({ total_count: trains.length });
});

app.get("/random", (req, res) => {
  res.send(trains[randomNumber(0, trains.length - 1)]);
});

app.listen(5000, () => {
  console.log("Running on port 5000!");
});

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}
