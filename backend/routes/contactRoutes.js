const router = require("express").Router();
const Contact = require("../models/Contact");
const auth = require("../middleware/auth");

// POST request from users (public)
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Message sent successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET request for admin (protected)
router.get("/", auth, async (req, res) => {
  try {
    const data = await Contact.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Error fetching data" });
  }
});

// DELETE request for admin (protected)
router.delete("/:id", auth, async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Message deleted" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting message" });
  }
});

module.exports = router;