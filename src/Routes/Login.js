const mongoose = require('mongoose');
const User = require('../modals/User.js');
const express = require('express');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

const App = express.Router();

App.post('/', async(req, res)=>{
    const { email, password } = req.body;
  
	const user = await User.findOne({ email });
	if (!user) {
	  return res.status(401).send({ error:true,message: "User Not found" });
	}
	if (await bcrypt.compare(password, user.password)) {
	  const token = jwt.sign({ email: user.email, id:user._id}, JWT_SECRET);

  
	  if (res.status(201)) {
		return res.json({token: token});
	  } else {
		return res.status(401).send({error:true, message:"error, please try again"});
	  }
	}
	res.status(401).send({ error: true, message: "Invalid Password" });
})

module.exports = App;