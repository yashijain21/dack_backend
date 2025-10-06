const express = require("express");
const router = express.Router();
const Service = require("../models/Service");

router.get("/", async (req, res) => {
  const services = await Service.find();
  res.json(services);
});

router.post("/book", async (req, res) => {
  const booking = new Service(req.body);
  await booking.save();
  res.json({ message: "Service booked", booking });
});

module.exports = router;
