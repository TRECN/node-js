
const express = require('express');

const apiRoutes = express.Router();

const dbo=require('../db/main')

const ObjectId = require('mongodb').ObjectId;

apiRoutes.route('/api').get((req,res)=>{
    let db_connect=dbo.getDb('passcodes');
    db_connect
        .collection('apis')
        .find({})
        .toArray((er,result)=>{
            if(er) throw er;
            res.json(result)
        })
})
apiRoutes.route('/api/:id').get((req,res)=>{
    let db_connect=dbo.getDb();
    let myquery={_id:ObjectId(req.params.id)}
    db_connect
        .collection('apis')
        .findOne(myquery,(er,result)=>{
            if(er)throw er;
            res.json(result);
        })
})

apiRoutes.route('/api/add').post((req,res)=>{
    let db_connect=dbo.getDb();
    let obj={
        title:req.body.title,
        pass:req.body.pass,
    };
    db_connect
        .collection('apis')
        .insertOne(obj,(er,result)=>{
            if(er)throw er;
            res.json(result);
        })
});

apiRoutes.route('/update/:id').post((req,res)=>{
    let db_connect=dbo.getDb();
    let myquery={_id:ObjectId(req.params.id)};
    let newVal={
        $set:{
            title:req.body.title,
            pass: req.body.pass,
        },
    };
    db_connect
        .collection('apis')
        .updateOne(myquery,newVal,(er,result)=>{
            if(er)throw er;
            console.log('1 document updated')
            res.json(result);
        });
});

apiRoutes.route('/:id').delete((req,res)=>{
    let db_connect=dbo.getDb();
    let myquery={_id:ObjectId(req.params.id)};
    db_connect
        .collection('apis')
        .deleteOne(myquery,(er,result)=>{
            if(er)throw er;
            console.log('1 document deleted')
            res.json(result)
        })
})

module.exports=apiRoutes;