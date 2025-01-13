const express = require('express');
const router = express.Router();

router.get("/user/:id/:name", (req, res, next) => {
//  param
//   const {id, name} = req.params;
//  console.log(`id :${id}
// name: ${name}`)

// query
// const {title, age} = req.query;
// console.log(`title: ${title} 
//   age: ${age}`)

  // body
  const {name, age, hobbies, language} = req.body;
  console.log(`name:${name}
    age:${age}
    hobbies:${hobbies}
    language${language}`)
});
router.get("/com", (req, res , next) => {
  console.log("com");
});
module.exports = router;