const DB  = require("./db.json")
const {saveToDB} = require("./utils")



// GET ALL WORKOUTS
const getAllWorkouts = ()=>{
    return DB.workouts
}
// CRETAE A NEW WORKOUT
const createNewWorkout = (newWorkout)=>{
    const isAlreadyAdded = DB.workouts.findIndex((workout)=>workout?.name === newWorkout?.name) > -1;

    if(isAlreadyAdded) return;
    DB.workouts.push(newWorkout)
    saveToDB(DB)
    return newWorkout
}
// GET ONE WORKOUT
const getOneWorkout = (workoutId)=>{
    const oneWorkout = DB.workouts.find((workout)=> workout?.name === workoutId || workout?.id === workoutId)
    if(!oneWorkout) return;
    return oneWorkout;
}
// 
const updateOneWorkout = (workoutId, changes)=>{
const indexOfItemToUpdate = DB.workouts.findIndex((workout)=>workout?.id === workoutId)
if(indexOfItemToUpdate === -1) return;

const updatedWorkout = {
    ...DB.workouts[indexOfItemToUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
}
DB.workouts[indexOfItemToUpdate] = updatedWorkout;
saveToDB(DB)

return updatedWorkout;
// return updatedWorkout
}
module.exports = {getAllWorkouts,createNewWorkout,getOneWorkout,updateOneWorkout}