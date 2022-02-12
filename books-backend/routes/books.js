const express = require("express");
const router = express.Router();

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
      VALUES ($1,$2,$3,$4,$5) RETURNING *;`,
        [
          req.body.name,
          req.body.author,
          req.body.publishing_year,
          req.body.isbn,
          req.body.image_url
        ]
      );

      res.status(200).send(data.rows[0]);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  });

  router.put("/", async (req, res) => {
    try {
      const respp = await db.query(
        `UPDATE books SET name = $1, 
                        author = $2, 
                        publishing_year = $3,
                        isbn = $4, 
                        image_url = $5
                    WHERE id = $6;`,
        [
          req.body.name,
          req.body.author,
          req.body.publishing_year,
          req.body.isbn,
          req.body.image_url,
          req.body.id
        ]
      );

      res.status(200).send(req.body);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  });

  router.delete("/:id", async (req, res) => {
    try {
      await db.query(
        `DELETE FROM books
          WHERE id = $1; `,
        [req.params.id]
      );

      res.status(200).send({ bookDeleted: true });
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  });
  return router;
};
