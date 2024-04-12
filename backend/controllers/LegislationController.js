const Legislation = require('../models/LegislationModel');
const asyncHandler = require('express-async-handler');

const getLegislation = asyncHandler(async(req, res) => {
  try {
    const legislation = await Legislation.find(({}));
    res.status(200).json(legislation);
  }
  catch(error){
    res.status(400);
    console.error(error);
  }
})

const getLegislationById = asyncHandler(async(req, res) => {
  try {
    const {id} = req.params;
    const legislation = await Legislation.findById(id);
    res.status(200).json(legislation);
  }
  catch(error){
    res.status(400);
    console.error(error);
  }
})

const createLegislation = asyncHandler(async(req, res) => {
  try {
    const legislation = await Legislation.create(req.body);
    res.status(200).json(legislation);
  }
  catch (error){
    res.status(400);
    console.error(error);
  }
});

const updateLegislation = asyncHandler(async(req, res) => {
  try {
    const {id} = req.params;
    const legislation = await Legislation.findByIdAndUpdate(id, req.body);
    if(!legislation){
      return res.status(400).send(`Learning link not found with ID ${id}`)
    }
    const updatedlegislation = await Legislation.findById(id);
    res.status(200).json(updatedlegislation);
  }
  catch(error){
    res.status(400);
    console.error(error);
  }
})

module.exports = {
  getLegislation,
  getLegislationById, 
  createLegislation,
  updateLegislation
}