const mongo=require("mongoose");
mongo.Promise=global.Promise;
require("dotenv").config();
mongoDBerror=require("mongoose-mongodb-errors");
mongo.plugin(mongoDBerror);


mongo.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to Database");
    }).catch((err) => {
        console.log("Not Connected to Database ERROR! ",err);
    });
    