const express = require('express');
const router = express.Router();
const {getAct, getActById, updateAct, createAct} = require('../controllers/ActController');

router.get('/', getAct);
router.get('/:id', getActById);
router.put('/:id', updateAct);
router.post('/', createAct);

module.exports = router;