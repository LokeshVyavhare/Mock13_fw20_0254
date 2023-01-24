const mongoose = require('mongoose');
const User = require('../modals/User.js');
const express = require('express');
const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken')


const App = express.Router();

App.get('/', async(req, res)=>{
    const {token} = req.headers;

    try{
        const verify = jwt.verify(token, JWT_SECRET);
        const {email, id} = verify;

        const user = await User.findById(id);

        if(user){
            const {name, email} = user;
            res.send({name, email})
        }else{
            res.status(404).send({error:true, message:"Invalid Token"})
        }

    }catch(err){
        res.status(404).send({error:true, message:err.message})
    }

})

module.exports = App;