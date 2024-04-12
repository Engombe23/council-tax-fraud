const Learning = require('../models/LearningModel');
const asyncHandler = require('express-async-handler');

const getLearning = asyncHandler(async(req, res) => {
  try {
    const learning = await Learning.find(({})).sort({title: 1});
    res.status(200).json(learning);
  }
  catch(error){
    res.status(400);
    console.error(error);
  }
})

const getLearningById = asyncHandler(async(req, res) => {
  try {
    const {id} = req.params;
    const learning = await Learning.findById(id);
    res.status(200).json(learning);
  }
  catch(error){
    res.status(400);
    console.error(error);
  }
})

const createLearning = asyncHandler(async(req, res) => {
  try {
    const learning = await Learning.create(req.body);
    res.status(200).json(learning);
  }
  catch (error){
    res.status(400);
    console.error(error);
  }
});

const updateLearning = asyncHandler(async(req, res) => {
  try {
    const {id} = req.params;
    const act = await Learning.findByIdAndUpdate(id, req.body);
    if(!act){
      return res.status(400).send(`Learning link not found with ID ${id}`)
    }
    const updatedlearning = await Learning.findById(id);
    res.status(200).json(updatedlearning);
  }
  catch(error){
    res.status(400);
    console.error(error);
  }
})

module.exports = {
  getLearning,
  getLearningById, 
  createLearning,
  updateLearning
}