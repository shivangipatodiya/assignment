const express = require("express");
const router = express.Router();
const db = require("../db");
const booksRouter = require("./books");

router.use("/books", booksRouter(db));

router.use("/", (req, res) => {
  res.send("ok");
});
router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;
