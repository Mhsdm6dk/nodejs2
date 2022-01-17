const { path } = require("express/lib/application");
const oderModel = require("../models/oderModels");

class OderController{
    async getall(req,res){
        try{
            const oderlist= await oderModel.find({})
            .populate("item");
            res.json({success:true,data:oderlist});
        }
        catch(err){
            res.status(500).json({succes:false,message:"loi server"}); 
        }
    }
    async get(req,res){
        try{
            const oderlist=await oderModel.find({customer:req._id})
            .populate("oder_list.item")
            res.json({success:true, data:oderlist})
        }
        catch(err){
            res.status(500).json({success:false,message:"loi server"});
        }
    }
    async post(req,res){
        try{
            const oder=await oderModel.create({
                telephone:req.body.telephone,
                address:req.body.address,
                cost:req.body.cost,
                oder_date:req.body.oder_date,
                oder_list:req.body.oder_list,
                customer:req._id
            })
            res.json(req.body);
        }
        catch(err){
            res.status(500).json({success:false,message:"loi server"});
        }
    }
    async put(req,res){
        try{
            const oder=await oderModel.updateOne({_id:req.params._id},{
                telephone:req.body.telephone,
                address:req.body.address,
                cost:req.body.cost,
                oder_date:req.body.oder_date,
                oder_list:req.body.oder_list,
                customer:req.body.customer
            })
            res.json(req.body)
        }
        catch(err){
            res.status(500).json({success:false,message:"loi server"});
        }
    }

    async delete(req,res){
        try{
            const oder=await oderModel.deleteOne({customer:req._id})
            if(oder.deletedCount){
                res.json("delete successfully!")
            }
            else{
                res.status(404).json({success:false, message:"oder not found"});
            }
        }
        catch(err){
            res.status(500).json({success:false,message:"loi server"});
        }
    }
    async admindelete(req,res){
        try{
            const oder=await oderModel.deleteOne({_id:req.params._id})
            if(oder.deletedCount){
                res.json("delete successfully!")
            }
            else{
                res.status(404).json({success:false, message:"oder not found"});
            }
        }
        catch(err){
            res.status(500).json({success:false,message:"loi server"});
        }
    }
}
module.exports=new OderController();