const mongoose = require('mongoose')

const {MONGO_URI}=process.env;

exports.connect=()=>{
    mongoose
    .connect(MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify:false,
    })
    .then(()=>{
        console.log("Successfully connected to database");
    })
    .catch((er)=>{
        console.log("database connection failed. exiting now...");
        console.error(er)
        process.exit(1)
    });
}



