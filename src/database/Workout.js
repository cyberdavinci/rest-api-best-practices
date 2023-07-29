const DB = require("./db.json");
const { saveToDB } = require("./utils");

// GET ALL WORKOUTS
const getAllWorkouts = () => {
  return DB.workouts;
};
// CRETAE A NEW WORKOUT
const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout?.name === newWorkout?.name) > -1;

  if (isAlreadyAdded) {
    throw {
      status: 400,
      message: `workout with the name '${newWorkout.name}' already exists`,
    };
  }
  try {
    DB.workouts.push(newWorkout);
    saveToDB(DB);
    return newWorkout;
  } catch (error) {
    throw { status: 500, message: error.message || error };
  }
};
// GET ONE WORKOUT
const getOneWorkout = (workoutId) => {
  const oneWorkout = DB.workouts.find(
    (workout) => workout?.name === workoutId || workout?.id === workoutId
  );
  if (!oneWorkout) return;
  return oneWorkout;
};
//
const updateOneWorkout = (workoutId, changes) => {
  const indexOfItemToUpdate = DB.workouts.findIndex(
    (workout) => workout?.id === workoutId
  );
  if (indexOfItemToUpdate === -1) return;

  const updatedWorkout = {
    ...DB.workouts[indexOfItemToUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  DB.workouts[indexOfItemToUpdate] = updatedWorkout;
  saveToDB(DB);

  return updatedWorkout;
  // return updatedWorkout
};
const deleteOneWorkout = (workoutId) => {
  try {
    const indexForDeletion = DB.workouts.findIndex(
      (workout) => workout?.id === workoutId
    );
    if (indexForDeletion === -1) {
      throw {
        status: 400,
        message: `Can't find workout with the id ${workoutId}`,
      };
    }
    DB.workouts.splice(indexForDeletion, 1);
    saveToDB(DB);
  } catch (error) {
    throw {
      status: error?.status || 500,
      message: error?.message || error,
    };
  }
};
module.exports = {
  getAllWorkouts,
  createNewWorkout,
  getOneWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
