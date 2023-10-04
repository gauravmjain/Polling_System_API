const express = require('express');
const router = express.Router({mergeParams : true});
const optionController = require('../../../controller/options_controller');



router.post('/create',optionController.create);
router.get('/delete',optionController.destroy);
router.get('/add_vote',optionController.addVote)


module.exports = router;