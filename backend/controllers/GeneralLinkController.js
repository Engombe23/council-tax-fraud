const GeneralLink = require('../models/GeneralLinkModel');
const asyncHandler = require('express-async-handler');

const getGeneralLink = asyncHandler(async(req, res) => {
  try {
    const generalLink = await GeneralLink.find(({}));
    res.status(200).json(generalLink);
  }
  catch(error){
    res.status(400);
    console.error(error);
  }
})

const getGeneralLinkById = asyncHandler(async(req, res) => {
  try {
    const {id} = req.params;
    const generalLink = await GeneralLink.findById(id);
    res.status(200).json(generalLink);
  }
  catch(error){
    res.status(400);
    console.error(error);
  }
})

const createGeneralLink = asyncHandler(async(req, res) => {
  try {
    const generalLink = await GeneralLink.create(req.body);
    res.status(200).json(generalLink);
  }
  catch (error){
    res.status(400);
    console.error(error);
  }
});

const updateGeneralLink = asyncHandler(async(req, res) => {
  try {
    const {id} = req.params;
    const generalLink = await GeneralLink.findByIdAndUpdate(id, req.body);
    if(!generalLink){
      return res.status(400).send(`Learning link not found with ID ${id}`)
    }
    const updatedgeneralLink = await GeneralLink.findById(id);
    res.status(200).json(updatedgeneralLink);
  }
  catch(error){
    res.status(400);
    console.error(error);
  }
})

module.exports = {
  getGeneralLink,
  getGeneralLinkById, 
  createGeneralLink,
  updateGeneralLink
}