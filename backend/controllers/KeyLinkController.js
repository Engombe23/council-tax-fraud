const KeyLink = require('../models/KeyLinkModel');
const asyncHandler = require('express-async-handler');

const getKeyLink = asyncHandler(async(req, res) => {
  try {
    const keylink = await KeyLink.find(({}));
    res.status(200).json(keylink);
  }
  catch(error){
    res.status(400);
    console.error(error);
  }
})

const getKeyLinkById = asyncHandler(async(req, res) => {
  try {
    const {id} = req.params;
    const keylink = await KeyLink.findById(id);
    res.status(200).json(keylink);
  }
  catch(error){
    res.status(400);
    console.error(error);
  }
})

const createKeyLink = asyncHandler(async(req, res) => {
  try {
    const keylink = await KeyLink.create(req.body);
    res.status(200).json(keylink);
  }
  catch (error){
    res.status(400);
    console.error(error);
  }
});

const updateKeyLink = asyncHandler(async(req, res) => {
  try {
    const {id} = req.params;
    const keylink = await KeyLink.findByIdAndUpdate(id, req.body);
    if(!keylink){
      return res.status(400).send(`Learning link not found with ID ${id}`)
    }
    const updatedkeylink = await KeyLink.findById(id);
    res.status(200).json(updatedkeylink);
  }
  catch(error){
    res.status(400);
    console.error(error);
  }
})

module.exports = {
  getKeyLink,
  getKeyLinkById, 
  createKeyLink,
  updateKeyLink
}