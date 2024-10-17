const express = require ('express');
const router = express.Router();
const {setPosts} = require('../controllers/post.controller');

router.get("/", (req , res) =>{
    res.json({message :  req.message});
});

// router.post("/", (req , res) =>{
//     res.json({message :  req.body.message});
// });

router.post("/", setPosts);


router.put("/edit:id", (req , res) =>{
    res.json({messageId :  req.params.messageId});
});

router.delete("/delete:id", (req , res) =>{
    res.json({messageId :  req.params.messageId});
});






module.exports = router;