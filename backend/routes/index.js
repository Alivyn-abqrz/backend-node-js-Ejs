// const express = require('express');
// const router = express.Router();

// // using get localhost:3001/first/user/852456/alvin?title=Nodejspractice&age=23
// router.get("/user/:id/:name", (req, res, next) => {
// //  req param
// //   const {id, name} = req.params;
// //  console.log(`id :${id}
// // name: ${name}`)

// // req query
// // const {title, age} = req.query;
// // console.log(`title: ${title} 
// //   age: ${age}`)

//   // req body
//   const {name, age, hobbies, language} = req.body;
//   console.log(`name:${name}
//     age:${age}
//     hobbies: ${hobbies[0]}
//     language: ${language[2]}`)

// //res status
// // res.status(404) 

// // res json to front-end
//     res.status(404).json({
//       Message:`your name is ${name} and your age is ${age}, hobbies is ${hobbies[0]} and my language is ${language[2]}`
//     })
// });

// // using post
// router.post("/job", (req, res , next) => {
//   try{
//     const {id} = req.query;
//     // throw Error(); localhost:3001/first/job?id=2000
//     if(!id){
//       res.status(400).json({message:"message id is missing"})
//     }
//     res.status(200).json({message:'Your request success!.', data :id })
//   }catch(error){
//     res.status(500).json({message:'your request failed!', error: error})
//   }
  
// });

// module.exports = router;