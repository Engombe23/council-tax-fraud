const express = require('express');
const router = express.Router();
const {getLegislation, getLegislationById, updateLegislation, createLegislation} = require('../controllers/LegislationController');

router.get('/', getLegislation);
router.get('/:id', getLegislationById);
router.put('/:id', updateLegislation);
router.post('/', createLegislation);

module.exports = router;