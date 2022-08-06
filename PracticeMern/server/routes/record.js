const express = require('express')

const recordRoutes = express.Router();

const dbo=require('../db/base');

const ObjectId = require('mongodb').ObjectId;


    
module.exports = recordRoutes;