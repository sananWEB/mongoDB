const route=require("express").Router()
const mongo=require("mongoose");
const { update } = require("../model/collcetion2");

const checkOauth=require("./middleware/Oauth")


//import collection
require("../model/collcetion2")
const C2= mongo.model("DB-V2")

route.post("/",checkOauth,async(req,res)=>{
  const file = req.files.file;
  console.log(file)
  //console.log(req.body)
  // const data=new C2();
  // data.name=req.body.product
  // data.price=req.body.price
  //         await data.save();  
  // res.send(file)
           // console.log(process.cwd())
   
//   file.mv(`${process.cwd()}/client/public/${file.name}`, err => {
//     if(err) {
//       console.error(err);
//       return res.status(500).send(err);
//     }
  
//     res.json({ fileName: file.name, filePath: `/${file.name}` });
//   });
   
// })

file.mv(`${process.cwd()}/client/public/${file.name}`).then(()=>{

//this is is coming from Oauth.js
  console.log(req.userData)


 // res.send({ fileName: file.name, filePath: `/${file.name}` }); 
   res.send("file is saved!")
});
 
})
module.exports=route;