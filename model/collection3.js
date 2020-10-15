const mongo=require("mongoose");

const schma= mongo.Schema({
    username:{
        type:String,
        required :true,
       
    },
    email:{
        type:String,
        required :true,
        index:{
            unique:true,
        },
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password:{
        type:String,
        required :true,
    },
    data:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongo.model("DB-V3",schma)