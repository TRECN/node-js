const { response } = require('express');
const express = require('express')

const recordRoutes = express.Router();

const dbo=require('../db/base');

const ObjectId = require('mongodb').ObjectId;

recordRoutes.route('/record').get((req,res)=>{
    let db_connect=dbo.getDb('employees');
    db_connect
        .collection('records')
        .find({})
        .toArray((er,result)=>{
            if(er)throw er;
            res.json(result)
        })
})

recordRoutes.route('/record/:id').get((req,res)=>{
    let db_connect=dbo.getDb();
    let myquery = {_id: ObjectId(req.params.id)};
    db_connect
        .collection('records')
        .findOne(myquery,(er,result)=>{
            if(er)throw er;
            res.json(result);
        });
});

recordRoutes.route('/record/add').post((req,res)=>{
    let db_connect=dbo.getDb();
    let myobj={
        name:req.body.name,
        position:req.body.position,
        level:req.body.level,
    };
    db_connect
        .collection('records')
        .insertOne(myobj,(er,result)=>{
            if(er)throw er;
            res.json(result);
        });
});

recordRoutes.route('/update/:id').post((req,res)=>{
    let db_connect=dbo.getDb();
    let myquery={_id:ObjectId(req.params.id)};
    let newval={
        $set:{
            name:req.body.name,
            position:req.body.position,
            level:req.body.level,
        },
    };
    db_connect
        .collection('records')
        .updateOne(myquery,newval,(er,result)=>{
            if(er)throw er;
            crossOriginIsolated.log('1 document updated');
            res.json(result);
        });
});

recordRoutes.route('/:id').delete((req,res)=>{
    let db_connect=dbo.getDb();
    let myquery={_id:ObjectId(req.params.id)};
    db_connect
        .collection('records')
        .deleteOne(myquery,(er,result)=>{
            if(er)throw er;
            console.log('1 document deleted');
            res.json(result)
        });
});


    
module.exports = recordRoutes;