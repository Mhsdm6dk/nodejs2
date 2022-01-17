const joi=require('joi')
const schema=joi.object({
    name:joi.string().regex(/^[0-9]+$/)
    .min(3)
    .max(30),
    age:joi.number()
    .exist()
    .min(20)

})
    const a=schema.validate({
        name:"26565",
        age:25
    })
if(a.error){
    console.log('cos loi')
}
else{
    console.log('ok')
}