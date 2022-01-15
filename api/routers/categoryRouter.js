const categoryController=require('../controllers/categoryController');
const express=require('express');
const categoryMiddleware = require('../middleware/categoryMiddleware');
const router=express.Router();
router.get('/',categoryController.get);
router.post('/',categoryMiddleware.post,categoryController.post);
router.put('/:_id',categoryMiddleware.post,categoryController.update);
router.delete('/:_id',categoryController.delete);
module.exports=router;