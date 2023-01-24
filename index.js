const express = require('express');
const MongoDBConnect = require('./src/Config/MongoDB.js');
const cors = require('cors');
require('dotenv').config();


// routes: import
const SigninRoute = require('./src/Routes/Login')
const SignupRoute = require('./src/Routes/Register')
const JobsRoute = require('./src/Routes/Jobs')


const app = express();

// meta functions
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())

app.get('/',(req,res)=>res.send('hello world'));

// routes;
app.use('/login', SigninRoute);
app.use('/register', SignupRoute);
app.use('/jobs', JobsRoute);



app.listen(8080,async()=> { 
    await MongoDBConnect();
    console.log('server started at http://localhost:8080')
})