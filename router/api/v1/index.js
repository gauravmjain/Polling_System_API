const express = require('express');
const router = express.Router();

router.use('/options',require('./options'));
router.use('/options/:id',require('./options'));
router.use('/question/:id',require('./questions'));
router.use('/question',require('./questions'));


module.exports = router;

