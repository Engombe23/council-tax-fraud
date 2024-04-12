const Act = require('../models/ActModel');
const asyncHandler = require('express-async-handler');

const getAct = asyncHandler(async(req, res) => {
  try {
    const act = await Act.find(({}));
    res.status(200).json(act);
  }
  catch(error){
    res.status(400);
    console.error(error);
  }
})

const getActById = asyncHandler(async(req, res) => {
  try {
    const {id} = req.params;
    const act = await Act.findById(id);
    res.status(200).json(act);
  }
  catch(error){
    res.status(400);
    console.error(error);
  }
})

const createAct = asyncHandler(async(req, res) => {
  try {
    const act = await Act.create(req.body);
    res.status(200).json(act);
  }
  catch (error){
    res.status(400);
    console.error(error);
  }
});

const updateAct = asyncHandler(async(req, res) => {
  try {
    const {id} = req.params;
    const act = await Act.findByIdAndUpdate(id, req.body);
    if(!act){
      return res.status(400).send(`Learning link not found with ID ${id}`)
    }
    const updatedact = await Act.findById(id);
    res.status(200).json(updatedact);
  }
  catch(error){
    res.status(400);
    console.error(error);
  }
})

module.exports = {
  getAct,
  getActById, 
  createAct,
  updateAct
}