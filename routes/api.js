var express = require("express");
var router = express.Router();
const db = require("../model/helper");

router.get("/", (req, res) => {
  res.send("Welcome to the API");
});

router.get("/movies", (req, res) => {
  // Send back the full list of items
  db("SELECT * FROM movies ORDER BY year ASC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.post("/movies", (req, res) => {
  // The request's body is available in req.body
  // If the query is successfull you should send back the full list of items
  db(`INSERT INTO movies (title, img, favorite, year) VALUES ('${req.body.title}', '${req.body.img}', ${req.body.favorite}, ${req.body.year});`)
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

router.put("/movies/:movie_id", (req, res) => {
  // The request's body is available in req.body
  // URL params are available in req.params
  // If the query is successfull you should send back the full list of items
  db(`UPDATE movies SET favorite = !favorite WHERE id= ${req.params.movie_id};`)
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));  //
});

router.delete("/movies/:movie_id", (req, res) => {
  // URL params are available in req.params
  db(`DELETE FROM movies WHERE id= ${req.params.movie_id};`)
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));  //  //
});

module.exports = router;
