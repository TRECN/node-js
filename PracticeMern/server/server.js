const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({path:'./config.env'});

const port = process.env.PORT||5000;
app.use(cors());
app.use(express.json());
app.use(require('./route/record'));

const dbo = require('./db/base');

app.listen(port,()=>{
    dbo.connectToServer((er)=>{
        if(er) console.log(er);
    });
    console.log(`server is running on port: ${port}`)
})