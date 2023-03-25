const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.send("Produce route testing"));

router.get("/", (req, res) => {
    Produce.find()
    .then((produce) => res.json(books))
    .catch((err) =>  res.status(404).json({noproducefound: "No Produce Found"}));
});

router.post("/", (req, res) => {
    Produce.create(req.body)
    .then((produce) => res.json({msg: "Book added successfully"}))
    .catch((err) =>  res.status(404).json({error: "unable to add produce"}));
})

outer.put("/:id", (req, res) => {
    Produce.findByIdAndUpdate(req.params.id, req.body)
      .then((produce) => res.json({ msg: "Updated successfully" }))
      .catch((err) =>
        res.status(400).json({ error: "Unable to update the database" })
      );
  });
  
  router.delete("/:id", (req, res) => {
    Produce.findByIdAndRemove(req.params.id, req.body)
      .then((produce) => res.json({ mgs: "Book entry deleted successfully" }))
      .catch((err) => res.status(404).json({ error: "No such a book" }));
  });
  
  module.exports = router;
  