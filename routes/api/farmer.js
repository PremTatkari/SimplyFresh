const express = require("express");
const router = express.Router();
const passport = require("passport");

const Farmer = require("../../models/Farmer");
passport.use(Farmer.createStrategy());

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

let isLogged;

router.get("/test", (req, res) => res.send("Farmer route testing"));

router.get("/", (req, res) => {
  if (isLogged) {
    Farmer.find()
      .then((farmers) => {
        res.json({ farmers: farmers, Logged: true });
      })
      .catch((err) =>
        res.status(404).json({ nofarmerfound: "No Farmer Found" })
      );
  } else {
    res.json({ msg: "Not logged in", Logged: null });
  }
});

router.post("/", (req, res) => {
  Farmer.findOne({ email: req.body.email }).then((foundFarmer) => {
    if (foundFarmer) {
      res.json({ msg: "Farmer already exists", Logged: null });
    } else {
      Farmer.create(req.body)
        .then((farmer) => {
          res.json({ msg: "Farmer added successfully", Logged: farmer._id });
          isLogged = true;
        })
        .catch((err) =>
          res.status(404).json({ error: "unable to add farmer", Logged: null })
        );
    }
  });
});

// router.post("/", (req, res) => {
//   Farmer.register({ email: req.body.email }, req.body.password, (err, user) => {
//     if (err) {
//       console.log(err);
//       res.status(404).json({ error: "unable to add farmer", isLogged: false });
//     } else {
//       passport.authenticate("local")(req, res, () => {
//         res.json({ msg: "Farmer added successfully", isLogged: true });
//       });
//     }
//   });
// });

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  Farmer.findOne({ email: email }).then((foundFarmer) => {
    if (password === foundFarmer.password) {
      res.json({
        msg: "Login successful",
        foundFarmer: foundFarmer,
        Logged: foundFarmer.email,
      });
      isLogged = true;
    } else {
      res.json({ msg: "wrong credentials", Logged: null });
    }
  });
});

// router.post("/login", (req, res) => {
//     const farmer = new Farmer({
//         email: req.body.email,
//         password: req.body.password
//     });
//     req.login(farmer, (err) => {
//         if(err) {
//             console.log(err);
//             res.status(404).json({ error: "unable to login farmer", isLogged: false });
//         } else {
//             passport.authenticate("local")(req, res, () => {
//                 res.json({ msg: "Farmer login successful", isLogged: true });
//               });
//         }
//     });
// });

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
