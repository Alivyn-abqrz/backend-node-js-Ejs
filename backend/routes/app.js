const express = require('express');
const router = express.Router();


router.get("/", (req, res, next) => {
  res.render("index")
});

router.get("/login", (req, res, next) => {
  res.render("login")
})
// router.get("/about", (req, res, next) => {
//   res.render("about")
// });

module.exports = router;