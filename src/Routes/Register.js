const mongoose = require('mongoose');
const User = require('../modals/User.js');
const express = require('express');
const bcrypt = require('bcryptjs')

const App = express.Router();

App.post('/', async (req, res) => {
    const {email, password, name } = req.body;

    const encryptedPassword = await bcrypt.hash(password, 10);
    try {
        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.status(401).send({ error: true, message: "User_Exists" });
        }
        const temp=email.split('@');
        if(temp.length!==2){
            res.status(401).send({ error: true, message: "Wrong Format Of the Email" });
            return;
        }
        let role;
        if(temp[1]==='masaischool.com'){
            role='admin'
        }else{
            role='user'
        }
        await User.create({
            email,
            password: encryptedPassword,
            name,
            role
        });
        res.send({ message: "user created successfully" , role});
    } catch (error) {
        res.status(401).send({ error: true, message: error.message });

    }
})

module.exports = App;