const {response}=require('express');
const express = require('express');

const apiRoutes = express.Router();

const dbo=require('../db/main')

const ObjectId = require('mongodb').ObjectId;


module.exports=apiRoutes;