const express = require("express")

const app = express()
const PORT = process.env.PORT || 3000


const v1WorkoutRouter = require("./v1/routes/workoutRoutes")

// app.get("/",(req,res)=>{
//     res.send("<h2>Hello there</h2>")
// })

app.use("/api/v1/",v1WorkoutRouter)

app.listen(PORT,()=>{
    console.log(`API up and running on port ${PORT}`)
})