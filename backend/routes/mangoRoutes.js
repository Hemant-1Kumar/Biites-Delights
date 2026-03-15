const router = require("express").Router();
const Mango = require("../models/Mango");
const auth = require("../middleware/auth");

// Create Order
router.post("/", async (req, res) => {
  try {
    const order = new Mango(req.body);
    await order.save();
    res.status(201).json({ message: "Order placed successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All Orders (Protected)
router.get("/", auth, async (req, res) => {
  try {
    const data = await Mango.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Error fetching orders" });
  }
});

// Delete Order (Protected)
router.delete("/:id", auth, async (req, res) => {
  try {
    await Mango.findByIdAndDelete(req.params.id);
    res.json({ message: "Order deleted" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting order" });
  }
});

module.exports = router;