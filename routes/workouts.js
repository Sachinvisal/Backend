const express = require('express')
const Workout = require('../models/workoutModel')
const {
    createWorkout,
    getWorkout,
    getAworkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

//GET all workouts
router.get('/', getWorkout)

//GET a single workout
router.get('/:id', getAworkout)

//POST a new workout 
router.post('/', createWorkout)

//DELETE a new workout 
router.delete('/:id', deleteWorkout)

//UPDATE a new workout 
router.patch('/:id', updateWorkout)

module.exports = router