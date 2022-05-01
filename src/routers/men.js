const express = require("express");

const router = new express.Router();

const MensRanking = require("../models/mens");

router.get("/", async (req, res) => {
  res.send("Hello from the shubham");
});

//
//POST REQUEST THROUGH POSTMAN
//
router.post("/mens", async (req, res) => {
  try {
    const addingMensRecords = new MensRanking(req.body);
    console.log(req.body);

    const insertMens = await addingMensRecords.save();
    res.status(201).send(insertMens);
  } catch (e) {
    res.status(400).send(e);
  }
});

//
//GET REQUEST THROUGH POSTMAN
//
router.get("/mens", async (req, res) => {
  try {
    const getMens = await MensRanking.find({}).sort({ ranking: 1 }); // sort our ranking with ascending order like 1, 2,3,4....

    res.send(getMens);
  } catch (e) {
    res.status(400).send(e);
  }
});

//
//HANDLE GET REQUEST OF PARTICULAR ITEMS
//
router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findById(_id);
    res.send(getMen);
  } catch (e) {
    res.status(400).send(e);
  }
});

//
//HANDLE PATCH REQUEST OF PARTICULAR ITEMS (UPDATE ITEM)
//
router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getMen);

    //after that in postman select patch methoad and go to url  localhost:3000/mens/particular id. Than in body select json and change any value you want to change like
    // {
    //   "name" :"Swayam"
    // }
  } catch (e) {
    res.status(500).send(e);
    //we give status 500 because it will be server related error
  }
});

//
//HANDLE DELETE REQUEST
//
router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findByIdAndDelete(_id);
    res.send(getMen);

    //after that in postman select patch methoad and go to url  localhost:3000/mens/particular id. Than in body select json and change any value you want to change like
    // {
    //   "name" :"Swayam"
    // }
  } catch (e) {
    res.status(500).send(e);
    //we give status 500 because it will be server related error
  }
});

module.exports = router;
