const route=require("express").Router()
const mongo=require("mongoose");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
//import collection

require("../model/collection3")
const C3= mongo.model("DB-V3")


route.post("/", (req,res)=>{
    
if(req.body.password!=req.body.Cpassword){
    res.send("Password is not match")
}
else{

    bcrypt.hash(req.body.password, 10, async function(err, hash) {
     
        if(err){
            console.log("there is a problem")
        }else{
            const data=new C3;
            data.username=req.body.username;
            data.email=req.body.email
            data.password=hash
            
             await data.save().then(()=>{res.send("data is saved")}).catch(()=>{res.send("data cannot saved ")});
            

        }
    })
}

})


route.post("/signin", async (req,res)=>{
    
  
  const eemail=req.body.email;
  const pass=req.body.password

     await C3.find({email:eemail}).then((ress)=>{
         if(ress.length==0){
             res.send("this email is not found")
         }
         else{

            bcrypt.compare(pass, ress[0].password, function(err, result) {
                if(err){
                    res.send(err)
                }else{
                    if(result==true){
                     var token=jwt.sign({
                            id:ress[0]._id,
                            email:ress[0].email,
                            password:ress[0].password
                        }
                        ,"XYZ"
                        ,{
                            expiresIn:"10 day"
                        })
                        res.send({
                            massage:"email and password is match",
                            token:token,
                        })    
                    }
                    else{
                        res.send("email and password is not match")    
                    }
                    
                }
               
            });


         
         }
      
         
     }).catch((error)=>{
        res.send(error)  
     })

           
  
    
    })



module.exports=route;