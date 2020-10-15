const route=require("express").Router()
const mongo=require("mongoose");
const checkOauth=require("./middleware/Oauth")
//import collection

require("../model/collection1")
const C1= mongo.model("DB-V")


route.post("/", async(req,res)=>{
    
const data1=new C1();

data1.username=req.body.username
await data1.save().then(()=>{
    res.send("data is saved")
}).catch(error=>{

    if(error.message=="Cannot read property '1' of null"){
        res.send("duplication is not allowed")
    }
    else{
        res.send("plz fill the field")
    }
    

})
})

route.get("/",checkOauth, async (req,res)=>{

 const data= await C1.find();
 res.send(data)
})

module.exports=route;