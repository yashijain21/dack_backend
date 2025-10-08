const express = require("express");
const Appointment = require("../models/Appointment");

const router = express.Router();

// @route   POST /api/appointments
// @desc    Create a new appointment
router.post("/", async (req, res) => {
  try {
    const { name, email, phoneNumber, productId, regNumber, date, time } = req.body;

    if (!name || !email || !phoneNumber || !productId || !regNumber || !date || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const appointment = new Appointment({
      name,
      email,
      phoneNumber,
      productId,
      regNumber,
      date,
      time,
    });

    await appointment.save();

    res.status(201).json({
      message: "Appointment booked successfully",
      appointment,
    });
  } catch (error) {
    console.error("Error booking appointment:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// (Optional) Get all appointments (for admin)
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find().populate("productId", "name category");
    res.status(200).json(appointments);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
