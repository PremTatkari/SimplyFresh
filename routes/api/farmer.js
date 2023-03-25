const express = require("express");
const router = express.Router();

const Farmer = require("../../models/Farmer")

router.get("/test", (req, res) => res.send("Farmer route testing"));

router.get("/", (req, res) => {
  Farmer.find()
    .then((farmers) => res.json(farmers))
    .catch((err) =>
      res.status(404).json({ nofarmerfound: "No Farmer Found" })
    );
});

router.post("/", (req, res) => {
  console.log(req.body);
  Farmer.create(req.body)
    .then((farmer) => res.json({ msg: "Farmer added successfully" }))
    .catch((err) => res.status(404).json({ error: "unable to add farmer" }));
});

router.put("/:id", (req, res) => {
  Farmer.findByIdAndUpdate(req.params.id, req.body)
    .then((farmer) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the database" })
    );
});

router.delete("/:id", (req, res) => {
  Farmer.findByIdAndRemove(req.params.id, req.body)
    .then((farmer) => res.json({ mgs: "Farmer entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a farmer" }));
});

module.exports = router;
