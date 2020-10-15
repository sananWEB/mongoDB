const ex=require("express");
require("express-async-errors")
const mongo=require("mongoose")
const bodyParser=require("body-parser");
const fileUpload = require('express-fileupload');
const app=ex();


app.use(fileUpload());

//middileware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    // Pass to next layer of middleware
    next();
  });


//DB CONNECT
require("./mongo")


//routes
app.use("/data",require("./routes/data"))
app.use("/product",require("./routes/product"))
app.use("/user",require("./routes/user"))


app.listen("5000",()=>{console.log("server is starting")})