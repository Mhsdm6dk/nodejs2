const categoryModel = require("../models/categoryModels");
const itemModel = require("../models/itemModels");

class ItemController{
    async get(req,res){
        try{
            const list =await itemModel.find({})
            .populate("category");
            res.json(list);
        }
        catch(err){
            res.status(404).json('not found');
        }
    }
    async post(req,res){
        try{
            const category=await categoryModel.findOne({
                name:req.body.category
            })
            const item=await itemModel.create({
                name:req.body.name,
                image:req.body.image,
                describes:req.body.describes,
                sale:req.body.sale,
                size:req.body.size,
                price:req.body.price,
                category:category._id
            })
            res.json({
                name:req.body.name,
                image:req.body.image,
                describes:req.body.describes,
                sale:req.body.sale,
                size:req.body.size,
                price:req.body.price,
                category:{
                    _id: category._id,
                    name: category.name
                }
            });
        }
        catch(err){
            res.status(500).json('err');
        }
    }
    async update(req,res){
        try{
            const item= await itemModel.updateOne({_id: req.params._id},{
                name:req.body.name,
                image:req.body.image,
                describes:req.body.describes,
                sale:req.body.sale,
                size:req.body.size,
                price: req.body.price
            })
            res.json(req.body);
            console.log(item);
        }
        catch{
            res.status(500).json('error');
        }
    }
    async delete(req,res){
        try{
            const respone=await itemModel.deleteOne({_id:req.params._id});
            if(respone.deletedCount){
                res.json('succes');
            }
            else{
                res.status(404).json('not found');
            }
        }
        catch(err){
            res.status(500).json('error');
        }
    }
}
module.exports=new ItemController();