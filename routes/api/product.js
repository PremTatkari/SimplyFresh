const express = require("express");
const router = express.Router();

const Product = require("../../models/Product")

router.get("/test", (req, res) => res.send("Product route testing"));

router.get("/", (req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) =>
      res.status(404).json({ noproductfound: "No Product Found" })
    );
});

router.post("/", (req, res) => {
  console.log(req.body);
  Product.create(req.body)
    .then((product) => res.json({ msg: "Product added successfully" }))
    .catch((err) => res.status(404).json({ error: "unable to add product" }));
});

router.put("/:id", (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body)
    .then((product) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the database" })
    );
});

router.delete("/:id", (req, res) => {
  Product.findByIdAndRemove(req.params.id, req.body)
    .then((product) => res.json({ mgs: "Product entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a product" }));
});

module.exports = router;
