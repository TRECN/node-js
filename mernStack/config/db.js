const mongoose = require('mongoose');
const config=require('config');
const db= config.get('mongoURI');

const connectDB = async()=>{
    try{
        await mongoose.connect(
            db,
            {
                useNewUrlParser:true
            }
        );
        console.log('mongoDB is Connected...');
    }catch(er){
        console.log(er.message);
        process.exit(1);
    }
}

module.exports=connectDB