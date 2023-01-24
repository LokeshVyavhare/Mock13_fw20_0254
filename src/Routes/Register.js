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
        await User.create({
            email,
            password: encryptedPassword,
            name
        });
        res.send({ message: "user created successfully" });
    } catch (error) {
        res.status(401).send({ error: true, message: error.message });

    }
})

module.exports = App;