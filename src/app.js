const express = require("express");

require("./db/conn");

const MensRanking = require("../src/models/mens");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// app.get("/", async (req, res) => {
//   res.send("Hello from the shubham");
// });

//
//POST REQUEST THROUGH POSTMAN
//
app.post("/mens", async (req, res) => {
  try {
    const addingMensRecords = new MensRanking(req.body);
    console.log(req.body);

    addingMensRecords.save();
  } catch (e) {
    res.send(e);
  }
});

app.listen(port, () => {});
