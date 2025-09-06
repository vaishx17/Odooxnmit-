const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const authRoutes = require("./routes/auth");
const listingsRoutes = require("./routes/listings");
const cartRoutes = require("./routes/cart");


app.use(express.json());
app.use("/auth", authRoutes);
app.use("/listings", listingsRoutes);
app.use("/cart", cartRoutes);

app.get("/", (req, res) => {
  res.send("Backend running!");
});




app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
