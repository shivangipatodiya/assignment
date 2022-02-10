var express = require("express");
var router = express.Router();

/* GET books listing. */
module.exports = (db) => {
  router.get("/", async (req, res) => {
    try {
      const data = await db.query(`SELECT * FROM books;`);
      const books = data.rows;
      res.status(200).send({ books });
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  });

  router.post("/", async (req, res) => {
    try {
      const data = await db.query(
        `INSERT INTO books (name, author, publishing_year, isbn, image_url)
      VALUES ($1,$2,$3,$4,$5)`,
        [
          req.body.name,
          req.body.author,
          req.body.publishingYear,
          req.body.isbn,
          req.body.imageUrl
        ]
      );

      res.status(200).send({ bookAdded: true });
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  });

  router.put("/", async (req, res) => {
    try {
       await db.query(
        `UPDATE books SET name = $1, 
                        author = $2, 
                        publishingYear = $3,
                        isbn = $4 , 
                        imageUrl = $5
                    WHERE products.id = $6`,
        [
          req.body.name,
          req.body.author,
          req.body.publishingYear,
          req.body.isbn,
          req.body.imageUrl,
          req.body.id
        ]
      );

      res.status(200).send( req.body );
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  });

  router.delete("/", async (req, res) => {
    try {
       await db.query(
        `DELETE FROM books
          WHERE id = $1 `,
        [req.body.id]
      );

      res.status(200).send({ bookDeleted: true });
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  });
  return router;
};
