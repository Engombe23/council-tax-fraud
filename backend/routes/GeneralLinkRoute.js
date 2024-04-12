const express = require('express');
const router = express.Router();
const {getGeneralLink, getGeneralLinkById, updateGeneralLink, createGeneralLink} = require('../controllers/GeneralLinkController');

router.get('/', getGeneralLink);
router.get('/:id', getGeneralLinkById);
router.put('/:id', updateGeneralLink);
router.post('/', createGeneralLink);

module.exports = router;