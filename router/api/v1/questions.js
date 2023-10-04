const express = require('express');
const router = express.Router({mergeParams : true});
const questionController = require('../../../controller/questions_controller');


router.post('/create',questionController.create);
router.get('/delete',questionController.destroy);
router.use('/options',require('./options'));
router.get('/',questionController.view);


module.exports = router;