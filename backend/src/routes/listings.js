const express = require("express");
const router = express.Router();
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

// GET /listings → return all listings
router.get("/", async (req, res) => {
  try {
    const listings = await prisma.listing.findMany();
    res.json(listings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /listings/:id → return one listing
router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const listing = await prisma.listing.findUnique({ where: { id } });
    if (!listing) return res.status(404).json({ error: "Listing not found" });
    res.json(listing);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /listings → create a new listing
router.post("/", async (req, res) => {
  try {
    const { title, description, price } = req.body;
    const listing = await prisma.listing.create({
      data: { 
        title, 
        description, 
        price: parseFloat(price)  // force number
      },
    });
    res.json(listing);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// PUT /listings/:id → update a listing
router.put("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, description, price } = req.body;
    const listing = await prisma.listing.update({
      where: { id },
      data: { title, description, price },
    });
    res.json(listing);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /listings/:id → delete a listing
router.delete("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const listing = await prisma.listing.delete({ where: { id } });
    res.json({ message: "Listing deleted", listing });
  } catch (err) {
    if (err.code === "P2025") { // Prisma error: record not found
      res.status(404).json({ message: "Listing not found" });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
});

module.exports = router;
