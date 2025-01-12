const express = require('express');
const router = express.Router();

router.get("/user", (req, res, next) => {
  console.log("test");
});
router.get("/com", (req, res , next) => {
  console.log("com");
});
module.exports = router;