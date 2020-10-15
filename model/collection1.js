const mongo=require("mongoose");

const schma= mongo.Schema({
    username:{
        type:"string",
        required :true,
       index:{
           unique:true,
       }
        
    }
})

module.exports=mongo.model("DB-V",schma)