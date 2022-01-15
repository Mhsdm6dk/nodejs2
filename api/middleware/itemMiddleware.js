class ItemMiddleware{
    post(req,res,next){
        if(req.body.name && req.body.image.length>0 && req.body.category && req.body.describes && req.body.sale && req.body.size.length>0 && req.body.price>0){
            next();
        }
        else{
            res.status(500).json('syntax error');
        }
    }
}
module.exports= new ItemMiddleware();