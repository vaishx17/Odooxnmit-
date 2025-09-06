const express = require("express");
const router = express.Router();

// GET /cart
router.get("/", (req, res) => {
  res.json([
    { id: 1, product: "Listing A", quantity: 2, price: 10 },
    { id: 2, product: "Listing B", quantity: 1, price: 20 }
  ]);
});

// POST /cart (add item)
router.post("/", (req, res) => {
  res.json({ message: "Add to cart (stub)" });
});

// POST /checkout
router.post("/checkout", (req, res) => {
  res.json({ message: "Checkout (stub)" });
});

// GET /me/purchases
router.get("/me/purchases", (req, res) => {
  res.json([
    { id: 1, product: "Listing A", quantity: 2, total: 20 },
    { id: 2, product: "Listing B", quantity: 1, total: 20 }
  ]);
});

module.exports = router;
