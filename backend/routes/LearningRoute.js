const express = require('express');
const router = express.Router();
const {getLearning, getLearningById, updateLearning, createLearning} = require('../controllers/LearningController');

router.get('/', getLearning);
router.get('/:id', getLearningById);
router.put('/:id', updateLearning);
router.post('/', createLearning);

module.exports = router;