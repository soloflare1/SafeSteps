const express = require("express");
const router = express.Router();
const Location = require("../models/Location");

// GET all locations
router.get("/", async (req, res) => {
  const data = await Location.find().sort({ createdAt: -1 });
  res.json(data);
});

// POST location (ANTI-DUPLICATE FIX)
router.post("/", async (req, res) => {
  try {
    const { deviceId, lat, lng, mode } = req.body;

    // 🔥 check last entry
    const last = await Location.findOne({ deviceId }).sort({ createdAt: -1 });

    if (last && last.lat === lat && last.lng === lng) {
      return res.json({ skipped: true });
    }

    const location = new Location({
      deviceId,
      lat,
      lng,
      mode,
      timestamp: new Date(),
    });

    await location.save();

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;