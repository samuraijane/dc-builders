const express = require("express");
const router = express.Router();

router.get("/api/products", (req, res) => {
  res.send("great");
});

module.exports = router;
