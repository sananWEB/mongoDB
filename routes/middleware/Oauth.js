//this middleware is used for not acces the routes for unauthouraze user

var jwt = require('jsonwebtoken');

module.exports=(req,res,next)=>{
    //console.log(req.headers.token)

    try {

             var token=req.headers.token.split(" ")[1];
    var decode=jwt.verify(token, "XYZ")
    req.userData=decode;
    console.log(token)
 next();
        
        
    } catch (error) {
        res.send({
            error:"invild token"
        })
    }
   
  
}