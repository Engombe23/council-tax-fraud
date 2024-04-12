const express = require('express');
const router = express.Router();
const {getKeyLink, getKeyLinkById, updateKeyLink, createKeyLink} = require('../controllers/KeyLinkController');

router.get('/', getKeyLink);
router.get('/:id', getKeyLinkById);
router.put('/:id', updateKeyLink);
router.post('/', createKeyLink);

module.exports = router;