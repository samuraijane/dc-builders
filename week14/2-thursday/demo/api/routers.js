const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/authors", async function (req, res) {
  const { author } = req.body;
  const newAuthor = await db.Author.create({
    name: author,
  });
  res.json({
    id: newAuthor.id,
  });
});

// router.post("/books", async function (req, res) {
//   const { title, author, publicationDate } = req.body;
//   const newUser = await db.Books.create({
//     title,
//     author,
//     publicationDate,
//   });
//   res.json({
//     title,
//     author,
//     publicationDate,
//   });
// });

module.exports = router;
