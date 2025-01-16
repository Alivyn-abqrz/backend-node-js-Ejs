const express = require('express');
const router = express.Router();


router.get("/", (req, res, next) => {
  res.render("index")
});

router.get("/login", (req, res, next) => {
  const {name, age, gender} = req.query;
  res.render("login", {
    user:["alvin", 22, "male"]
  })
})
// router.get("/about", (req, res, next) => {
//   res.render("about")
// });

module.exports = router;