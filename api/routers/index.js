
const categoryRouter=require('./categoryRouter');
const itemRouter=require('./itemRouter');
const customerRouter=require('./customerRouter');
const router=(app)=>{
    app.use('/category',categoryRouter);
    app.use('/item',itemRouter);
    app.use('/customer',customerRouter);
}
module.exports=router;