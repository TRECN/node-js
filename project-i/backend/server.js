const express = require('express')
const app = express();
const cors=require('cors');

require('dotenv').config({path:'./config.env'})

const port = process.env.PORT||5000;
app.use(cors());
app.use(express.json());
app.use(require('./apis/api'));

const dbo = require('./db/main');

app.listen(port,()=>{
    dbo.connectToServer((err)=>{
        if(err) console.log(err);
    });
    console.log(`server is running on Port:${port}`)
})