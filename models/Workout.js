const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  exerciseName: {
    type: String,
    required: true,
    unique: true,
  },
  sets: {
    type: Number,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  notes: {
    type: String,
    required: false,
  },
  muscleID:{
      type:Number,
      required:true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
