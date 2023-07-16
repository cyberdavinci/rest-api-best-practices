const express = require("express")
const router = express.Router()


// 
router.get("/",(req,res)=>{
    res.send("Get all workouts")
})


router.get("/:workoutId",(req,res)=>{
    res.send("Create an existing workout")
})


router.post("/",(req,res)=>{
    res.send("Create a new workout")
})

router.patch("/:workoutId",(req,res)=>{
    res.send("Update existing workout")
})

router.delete("/:workoutId",(req,res)=>{
    res.send("delete an existing workout")
})



module.exports = router

