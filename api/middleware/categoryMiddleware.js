const joi=require('joi');
class CategoryMiddleware{
    post(req,res,next){
        const validate=joi.string().max(100).min(1);
        if(req.body.name && !validate.error){
            next();
        }
        else{
            res.status(500).json('Syntax error');
        }
    }
}
module.exports=new CategoryMiddleware();