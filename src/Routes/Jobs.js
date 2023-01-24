const mongoose = require('mongoose');
const Jobs = require('../modals/Jobs.js');
const express = require('express');

const App = express.Router();

App.get('/', async (req, res) => {
    try{
        let data = await Jobs.find({});
        res.send({data});
    }catch(err){
        res.status(401).send({ error: true, message: err.message });
    }
})

App.post('/', async (req, res) => {
    const {company,position,location,contract} = req.body;

    try{
        let newJob = await Jobs.create({company,position,location,contract})
        if(newJob){
            res.send({message:"New Job Created Successfully"})
        }else{

        }
    }catch(err){
        res.status(401).send({ error: true, message: err.message });
    }
})

module.exports = App;