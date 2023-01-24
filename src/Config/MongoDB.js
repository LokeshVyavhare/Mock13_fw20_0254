const mongoose = require("mongoose");
mongoose.set('strictQuery', false);


const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/mock11_fw20_0254';
 const connect = ( )=> mongoose.connect(MONGODB_URL);

 module.exports = connect