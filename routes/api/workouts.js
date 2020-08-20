const express = require('express');
const router = express.Router();
const Workout = require('../../models/Workout');


// @route   POST api/workouts
// @desc    post a new workout
// @access  Public

router.post('/', async (req, res) => {
  try {
    const { userID, exerciseName, sets, reps, notes, muscleID } = req.body;
    const newWorkout = new Workout({
      userID,
      exerciseName,
      sets,
      reps,
      notes,
      muscleID,
    });

    console.log(req.body);
    console.log('recieved');
    const workout = await newWorkout.save();
    res.json(workout);
  } catch (error) {
    res.json(error);
  }
});

// @route   GET api/workouts
// @desc    Get user's workouts created within the last 24 hours
// @access  Public

router.get('/',async(req,res)=>{
    const {userID}=req.body
    try{
        const userWorkouts=await Workout.find({userID,"createdAt":{$gt:new Date(Date.now() - 24*60*60 * 1000)}})
        res.json(userWorkouts)
    }
    catch(error){
        res.json(error)
    }
})

// @route   Delete api/workouts/workoutID
// @desc    Delete a workout using its ID
// @access  Public

router.delete(`/:workoutID`, async (req, res) => {
  try {
    await Workout.findByIdAndDelete(req.params.workoutID);
    res.json('deleted!');
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
