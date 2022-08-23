const {response}=require('express');
const express = require('express');

const apiRoutes = express.Router();

const dbo=require('../db/main')

const ObjectId = require('mongodb').ObjectId;

apiRoutes.route('/api').get((req,res)=>{
    const db_connect=dbo.getDb('passcodes');
    db_connect
        .collection('apis')
        .find({})
        .toArray((er,result)=>{
            if(er) throw er;
            res.json(result)
        })
})
apiRoutes.route('/api/:id').get((req,res)=>{
    const db_connect=dbo.getDb();
    const myquery={_id:ObjectId(req.params.id)}
    db_connect
        .collection('apis')
        .findOne(myquery,(er,result)=>{
            if(er)throw er;
            res.json(result);
        })
})

module.exports=apiRoutes;