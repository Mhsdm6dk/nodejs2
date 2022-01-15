class CategoryMiddleware{
    post(req,res,next){
        if(req.body.name){
            next();
        }
        else{
            res.status(500).json('Syntax error');
        }
    }
}
module.exports=new CategoryMiddleware();