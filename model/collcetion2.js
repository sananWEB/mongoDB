const mongo=require("mongoose");

const schma= mongo.Schema({
    name:{
        type:String,
        required :true,
       index:{
           unique:true,
       }
        
    },
    price:{
        type:Number,
        required :true,
    }
})

module.exports=mongo.model("DB-V2",schma)