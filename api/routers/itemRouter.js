const express=require('express');
const itemController = require('../controllers/itemController');
const itemMiddleware = require('../middleware/itemMiddleware');
const router=express.Router();
router.get('/',itemController.get);
router.post('/',itemMiddleware.post,itemController.post);
router.put('/:_id',itemMiddleware.post,itemController.update);
router.delete('/:_id',itemController.delete);
module.exports=router;