const mongoose=require('mongoose');

module.exports=async function(){
    try{
        const db=await mongoose.connect('mongodb://localhost/nodejs');
        console.log('Ket noi den database thanh cong');
    }
    catch(err){
        console.log('Ket noi den database that bai');
        process.exit(1);
    }
};