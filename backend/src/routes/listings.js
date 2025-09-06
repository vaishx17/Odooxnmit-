const express = require("express");
const router = express.Router();

// GET /listings
router.get("/", (req, res) => {
  res.json([
    { id: 1, title: "Listing A", description: "Description A", price: 10 },
    { id: 2, title: "Listing B", description: "Description B", price: 20 }
  ]);
});

// GET /listings/:id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id, title: `Listing ${id}`, description: `Description ${id}`, price: id * 10 });
});

// POST /listings
router.post("/", (req, res) => {
  res.json({ message: "Create listing (stub)" });
});

// PUT /listings/:id
router.put("/:id", (req, res) => {
  res.json({ message: `Update listing ${req.params.id} (stub)` });
});

// DELETE /listings/:id
router.delete("/:id", (req, res) => {
  res.json({ message: `Delete listing ${req.params.id} (stub)` });
});

module.exports = router;
